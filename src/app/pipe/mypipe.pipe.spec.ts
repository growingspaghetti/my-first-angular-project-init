import { MypipePipe } from './mypipe.pipe';

describe('MypipePipe', () => {
  it('create an instance', () => {
    const pipe = new MypipePipe();
    expect(pipe).toBeTruthy();
  });
  it('transforms "猫" to "犬"', () => {
    const pipe = new MypipePipe();
    expect(pipe.transform('猫')).toBe('犬');
  });
});
