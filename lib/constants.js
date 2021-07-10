const SERVICE = {
  daemon: 'daemon',
  fullNode: 'goji_full_node',
  farmer: 'goji_farmer',
  harvester: 'goji_harvester',
  wallet: 'goji_wallet',
  walletUi: 'wallet_ui',
  plotter: 'goji plots create',
};
const SERVICE_TYPE = {
  fullNode: 1,
  harvester: 2,
  farmer: 3,
  timelord: 4,
  introducer: 5,
  wallet: 6,
};
const PLOTTING_STATE = {
  queued: 'SUBMITTED',
  running: 'RUNNING',
  error: 'ERROR',
  deleted: 'DELETED',
  finished: 'FINISHED',
};

module.exports = {
  SERVICE,
  SERVICE_TYPE,
  PLOTTING_STATE,
};
