/**
 * Get all elements from the guild
 * @param {String} from object from the guild
 * @param {Guild} guild
 * @param {RegExp} filter
 */
function getItems(from, guild, filter) {
  const results = []
  guild[from].cache.forEach((element) => {
    if (element.name.match(filter))
      results.push({
        name: element.name,
        id: element.id,
      })
  })
  return results
}

/**
 * Get the id of the `logs` channels
 * @param {Guild} guild
 * @returns {int}
 */
exports.discordLog = function (guild) {
  const channelLogsId = getItems('channels', guild, /log/).find(
    (item) => item.name === 'log'
  ).id

  return guild.channels.cache.get(channelLogsId)
}

/**
 * Get the `repas-ru` channels
 * @param {Guild | Client} guild
 * @returns {int}
 */
exports.discordRu = function (guild) {
  const channelRuId = getItems('channels', guild, /repas-ru/).find(
    (item) => item.name === 'repas-ru'
  ).id

  return guild.channels.cache.get(channelRuId)
}

exports.getItems = getItems
