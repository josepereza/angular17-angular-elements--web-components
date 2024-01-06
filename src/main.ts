import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { PruebaComponent } from './app/components/prueba/prueba.component';

(async () => {

  const app = await createApplication({
    providers: [
      /* your global providers here */
    ],
  });

  const toogleElement = createCustomElement(PruebaComponent, {
    injector: app.injector,
  });

  customElements.define('prueba-element', toogleElement);

})();