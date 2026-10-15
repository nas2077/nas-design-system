# Orbi

Orbi is Nas's orange pixel mascot: a round planet, an inclined ring, a small moon, and expressive facial features. The renderer uses a 56 by 46 pixel canvas at 12 frames per second.

```javascript
const mascot = Nas.orbi(canvas, {
  fit: {max: 280, container: canvas.parentElement},
  remember: false,
  say: (text, seconds) => showMessage(text, seconds),
  secret: name => recordSecret(name)
});
```

`Orbi.create` creates an unmanaged instance. `Nas.orbi` also observes the page's motion setting. `Orbi.draw(canvas, {t:0, face:'neutral'})` draws a static pose. `Orbi.fit` and `Orbi.crisp` preserve integer scaling. `Orbi.FACES` lists the expression names; `Orbi.icon` draws hand-tuned 16/32/64 pixel versions.

An instance exposes `click()`, `wake()`, `frame(t, face)`, `resume()`, `react(name)`, `stepFrames(n)`, `state()`, and `destroy()`. Static frames remain stable through theme changes. Hidden canvases and invalid pointer coordinates do not block the animation loop.

The planet floats, blinks, follows nearby pointers, responds to clicks, and can be dragged and thrown. Gestures, idle scenes, seasonal greetings, and keyboard secrets share a deterministic state machine. The same pose and palette produce the same pixels.

Use whole-number scales, preserve the silhouette and face placement, and keep the orange tones within the artwork. Reduced motion leaves a calm static pose. Orbi supports a product; it does not replace that product's own identity.
