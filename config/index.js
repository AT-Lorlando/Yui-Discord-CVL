exports.PREFIX = 'Yui '
exports.IDADMIN = process.env.ID_ADMIN
exports.IDPROF = process.env.ID_PROF
exports.IDBOT = process.env.ID_BOT
exports.addRoleChannelPattern = /ajout-de-role.*/i
exports.tdRolePattern = /.*TD.*/
exports.rolePattern = /<@&\d{18}>/i
exports.cronRu =
  process.env.NODE_ENV === 'production' ? '0 10 * 1-6,9-12 0' : '*/15 * * * * *'
exports.ruUrlBourges = process.env.RU_BOURGES_URL
exports.ruUrlBlois = process.env.RU_BLOIS_URL
