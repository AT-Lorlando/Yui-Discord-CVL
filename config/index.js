exports.PREFIX = 'Yui '
exports.IDADMIN = process.env.ID_ADMIN
exports.IDPROF = process.env.ID_PROF
exports.IDBOT = process.env.ID_BOT
exports.addRoleChannelPattern = /ajout-de-role.*/i
exports.tdRolePattern = /.*TD.*/
exports.rolePattern = /<@&\d{18}>/i
exports.cronRu =
  process.env.NODE_ENV === 'production'
    ? '0 0 11 1-6,9-12 1-5'
    : '*/5 * * * * *'
exports.urlRu = process.env.RU_URL
