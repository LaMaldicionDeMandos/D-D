import Vue from 'vue'
import Steps from '@/components/Steps'

describe('Steps.vue', () => {
  it('should render correct steps titles', () => {
    const Constructor = Vue.extend(Steps)
    const vm = new Constructor().$mount()
    const steps = vm.$el.querySelectorAll('div.bs-wizard-stepnum');
    expect(steps[0].textContent).toBe('Paso 1');
    expect(steps[1].textContent).toBe('Paso 2');
    expect(steps[2].textContent).toBe('Paso 3');
    expect(steps[3].textContent).toBe('Paso 4');
    expect(steps[4].textContent).toBe('Paso 5');
    expect(steps[5].textContent).toBe('Fin');
  });
  it('should render correct steps descriptions', () => {
    const Constructor = Vue.extend(Steps)
    const vm = new Constructor().$mount()
    const steps = vm.$el.querySelectorAll('div.bs-wizard-info');
    expect(steps[0].textContent).toBe('Ponle un nombre al mapa y elige el tamaño.');
    expect(steps[1].textContent).toBe('Prepara el mapa.');
    expect(steps[2].textContent).toBe('Agrega los monstruos y trampas.');
    expect(steps[3].textContent).toBe('Prepara la historia.');
    expect(steps[4].textContent).toBe('Escoge el nivel de la historia (para que nivel de personajes está hecha).');
    expect(steps[5].textContent).toBe('A jugar!');
  });

  it('first step should be active, other should be disabled', () => {
    const Constructor = Vue.extend(Steps)
    const vm = new Constructor().$mount()
    const steps = vm.$el.querySelectorAll('div.bs-wizard-step');
    expect(steps[0].classList).toContain('active');
    expect(steps[0].classList).not.toContain('disabled');
    expect(steps[1].classList).not.toContain('active');
    expect(steps[1].classList).toContain('disabled');
    expect(steps[2].classList).not.toContain('active');
    expect(steps[2].classList).toContain('disabled');
    expect(steps[3].classList).not.toContain('active');
    expect(steps[3].classList).toContain('disabled');
    expect(steps[4].classList).not.toContain('active');
    expect(steps[4].classList).toContain('disabled');
    expect(steps[5].classList).not.toContain('active');
    expect(steps[5].classList).toContain('disabled');

  });
});
