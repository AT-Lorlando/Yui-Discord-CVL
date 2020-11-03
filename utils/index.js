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

exports.discordLog = function (guild) {
  const channelLogsId = getItems('channels', guild, /logs/).find(
    (item) => item.name === 'logs'
  ).id

  return guild.channels.cache.get(channelLogsId)
}

exports.getItems = getItems
