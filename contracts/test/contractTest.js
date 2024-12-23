const Pay2Recycle = artifacts.require('Pay2Recycle');

contract('Pay2Recycle', (accounts) => {
  it('should log recycling points for a user', async () => {
    const instance = await Pay2Recycle.deployed();
    await instance.logRecycling(accounts[0], 10);
    const points = await instance.getRewardPoints(accounts[0]);
    assert.equal(points.toNumber(), 10, 'Recycling points not logged correctly');
  });
});
