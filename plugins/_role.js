let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 10) ? 'Newbie'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Warrior'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Elite'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Master'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Reasonable'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Epic'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Legend'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Mythic'
          : 'Beyond the limit'
  user.role = role
  return true
}

module.exports = handler
