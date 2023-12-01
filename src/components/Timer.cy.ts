import { formatTime } from './Timer';

describe('Timer', { viewportHeight: 1000, viewportWidth: 1000 }, () => {
  it('validate time', () => {
    expect(formatTime()).to.eq('00:00');
    expect(formatTime(1, 2, 3)).to.eq('1:02:03');
  });
});
