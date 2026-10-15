# Tabs

Arrow keys move between panels; Home and End select the edges.

Load `kit/nas.css` and `kit/nas.js`. Orbi examples also require `kit/orbi.js` and mini icons require `kit/orbi-icons.js`.

```html
<div class="n-tabs" data-n-tabs role="tablist" aria-label="Example views"><button id="tab-first" role="tab" aria-selected="true" aria-controls="panel-first">Overview</button><button id="tab-second" role="tab" aria-selected="false" aria-controls="panel-second" tabindex="-1">Details</button></div><p id="panel-first" role="tabpanel" aria-labelledby="tab-first">The overview panel.</p><p id="panel-second" role="tabpanel" aria-labelledby="tab-second" hidden>The details panel.</p>
```
