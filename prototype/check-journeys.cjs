// Source-level interaction simulations only. This is not a browser or phone test.
const fs = require('node:fs');
const assert = require('node:assert/strict');
const path = require('node:path');
const raw = fs.readFileSync(path.join(__dirname, 'phone-review.html'), 'utf8');
const script = raw.split('<script>')[1].split('</script>')[0];
const events = {}, pointerEvents = {}, root = { innerHTML: '' };
const layer = { style: { setProperty(k, v) { this[k] = v; } } };
const viewport = {
  clientWidth: 390, clientHeight: 480,
  addEventListener(n, f) { pointerEvents[n] = f; }, setPointerCapture() {},
  getBoundingClientRect() { return { left: 0, top: 0 }; },
};
const art = { complete: true, naturalWidth: 981, naturalHeight: 1280 };
global.requestAnimationFrame = f => f();
global.document = {
  querySelector: () => root, querySelectorAll: () => [],
  getElementById: id => ({ 'map-viewport': viewport, 'map-layer': layer, 'map-art': art }[id]),
  addEventListener(n, f) { events[n] = f; }, activeElement: { tagName: 'BODY' },
};
const scrollCalls = [];
global.window = { scrollY: 240, scrollTo(...args) { scrollCalls.push(args); } };
const checks = `
const click=(action,more={})=>events.click({target:{closest:()=>({dataset:{action,...more},disabled:false})}});
assert.equal(state.tab,'lineup');
click('save',{id:'glass'});
assert(state.saved.has('glass'),'first save without setup');
assert(lineUp().includes('data-action="ready"'),'preparation appears after save');
click('save',{id:'static'});
assert.equal(clashPairs().length,1,'saved overlap detected');
assert(lineUp().includes('Glass Harbor + Static Bloom'),'named clash in lineup');
click('resolve-clash');
assert.equal(state.tab,'plan');
assert(state.clashOpen);
assert(plan().includes('MAKE ROOM FOR BOTH?'));
click('split-clash');
assert.equal(clashPairs().length,0,'adjacent attendance portions do not overlap');
assert(state.saved.has('glass')&&state.saved.has('static'),'split retains interests');
click('undo');
assert.equal(clashPairs().length,1,'undo restores clash');
click('skip-clash',{id:'glass'});
assert.equal(clashPairs().length,0);
assert(state.saved.has('glass'),'skip retains interest');
assert(!plan().includes('<h2>Glass Harbor + Static Bloom</h2>'),'skipped set excluded from now');
click('undo');
state.attendance.glass='part';state.partial.glass={start:'14:35',end:'15:10'};
assert.equal(clashPairs().length,1,'partial overlaps detected');
state.partial.glass.end='15:30';
assert(activeInterval(examples[0]).invalid,'outside-set partial is invalid');
resetScenario('update');state.attendance.glass='part';state.partial.glass={start:'14:35',end:'15:10'};
click('published');
assert(displayTime(examples[0]).includes('personal'),'choice preview does not alter active value');
click('apply');
assert(displayTime(examples[0]).includes('published'));
assert(activeInterval(examples[0]).invalid,'moved set requires partial review');
assert(!state.knownNewer,'applied revision no longer shown as newer');
assert(state.saved.has('glass')&&state.saved.has('static'),'update retains picks');
resetScenario('reset');click('save',{id:'weather'});click('plan');
assert(plan().includes('No known set right now.'),'unknown timing is not free-time reassurance');
assert(plan().includes('These clashes cannot be checked.'));
click('map');click('map-filter',{name:'My sets'});
assert(map().includes('do not have a known stage yet'),'unknown-stage empty state');
assert(mapBaseW>0&&mapBaseH>0,'map renders and measures without undefined globals');
resetScenario('map-verified');render();click('stage',{id:'glass'});
assert.equal(state.mapStage,'BeatBox Stage');
assert(map().includes('Back to plan'));
click('back');
assert.equal(state.tab,'plan');
assert.deepEqual(scrollCalls.at(-1),[0,240],'set-to-map preserves plan position');
click('friends');click('friend-map');assert(map().includes('Back to Friends'));
click('back');assert.equal(state.tab,'friends');
click('map');
const x0=state.mapX,z0=state.mapZoom;
zoomMap(2,195,240);
assert.equal(state.mapZoom,z0*2);
assert(Math.abs((195-state.mapX)/state.mapZoom-(195-x0)/z0)<1e-8,'zoom keeps pointed artwork location');
zoomMap(100);assert.equal(state.mapZoom,6);zoomMap(.001);assert.equal(state.mapZoom,1);
fitMap();assert.equal(state.mapZoom,1);assert.equal(layer.style['--inv'],'1');
click('map-stage',{name:'Ghost Stage'});
const ghost=stagePoints.find(p=>p.name==='Ghost Stage');
assert(Math.abs(state.mapX+mapBaseW*ghost.x/100*state.mapZoom-195)<1e-8,'focus centers label');
click('map-filter',{name:'Water'});assert(!map().includes('class="map-marker '),'unverified amenity positions not invented');
const panX=state.mapX,panY=state.mapY;
pointerEvents.pointerdown({target:{closest:()=>null},pointerId:1,clientX:100,clientY:100});
pointerEvents.pointermove({pointerId:1,clientX:135,clientY:120});
assert.equal(state.mapX,panX+35);assert.equal(state.mapY,panY+20);
pointerEvents.pointerup({pointerId:1});
click('map-checkin');const checkinTime=state.mapCheckin.time;
state.mapTime+=10;assert.equal(state.mapCheckin.time,checkinTime,'manual report remains dated');
resetScenario('failure');const checked=state.lastCheck;
click('connection');assert.equal(state.lastCheck,checked,'connection is not an update check');
assert.equal(state.download,'failed','connection is not a completed download');
click('check');assert.notEqual(state.lastCheck,checked);
click('download');assert.equal(state.download,'saved');
for(const tab of ['lineup','plan','map','friends','ready','updates']){
  state.tab=tab;render();
  assert(root.innerHTML.includes('class="brandbar"'),tab+' shared header');
  assert(root.innerHTML.includes('class="bottom-nav"'),tab+' shared navigation');
}
resetScenario('reset');state.query='acoustic';
assert(lineUp().includes('Glass Harbor · acoustic'));
assert(!lineUp().includes('<h3>Static Bloom</h3>'));
state.query='';state.onlySaved=true;
assert(lineUp().includes('No matching appearances'));
console.log('Journey simulations passed: save, named clash, split/skip/undo, unknown data, update preview/apply, map focus/return/zoom/pan, dated check-in, readiness and shared navigation.');
`;
new Function('assert', 'events', 'pointerEvents', 'layer', 'root', 'scrollCalls', script + '\n' + checks)(assert, events, pointerEvents, layer, root, scrollCalls);
