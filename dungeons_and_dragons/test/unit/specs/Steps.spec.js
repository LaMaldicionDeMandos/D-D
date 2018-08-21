import Vue from 'vue'
import Steps from '@/components/Steps'
import { mount } from '@vue/test-utils'

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

  describe('Goin to next step', () => {
    var wrapper, vm, steps;
    beforeEach(() => {
      wrapper = mount(Steps);
      vm = wrapper.vm;
      steps = vm.$el.querySelectorAll('div.bs-wizard-step');
    });

    describe('When complete the steps', () => {
      it('complete step 2, should complete step 1 and active step 2, others are disabled', () => {
        vm.complete(2);
        wrapper.update();
        console.log(JSON.stringify(steps));
        expect(steps[0].classList).toContain('complete');
        expect(steps[1].classList).toContain('active');
        expect(steps[2].classList).toContain('disabled');
        expect(steps[3].classList).toContain('disabled');
        expect(steps[4].classList).toContain('disabled');
        expect(steps[5].classList).toContain('disabled');
      });
      it('complete step 6, should complete all steps but 6 is active', () => {
        vm.complete(6);
        console.log(JSON.stringify(steps));
        expect(steps[0].classList).toContain('complete');
        expect(steps[1].classList).toContain('complete');
        expect(steps[2].classList).toContain('complete');
        expect(steps[3].classList).toContain('complete');
        expect(steps[4].classList).toContain('complete');
        expect(steps[5].classList).toContain('active');
      });
    });
  });
});
