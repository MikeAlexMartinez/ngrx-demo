import { AppComponent } from './app.component';

describe('AppComponent', () => {

  it('should add 1 + 1', () => {
    expect(1 + 1).toEqual(2);
  });

  it('should have a component', () => {
    const component = new AppComponent();
    expect(component.title).toEqual('hello sydney, welcome to fbc');
  });

});
