module.exports = {
  profile: {
    ownerName: "SUNETH Bro", // defult: AiDarkEzio
    ownerNumb: "94770378874", // defult: 94761539856
    botName: "BLACK SUKI-MD", // defult: Whats Bot MD
  },
  reply: {
    notFound: "alive", // defult: "This Command not created. it was creating",
    success: "done", // defult: "Done ✓",
    admin: "owner", // defult: "This Feature Is Only For Admin!",
    botAdmin: "botadmin", // defult: "Bot Must Be Admin First!",
    owner: "suneth", // defult: "This Feature Is Only For Owner!",
    group: "group", // defult: "Feature Used Only For Groups!",
    private: "privet", // defult: "Features Used Only For Private Chat!",
    bot: "bot", // defult: "This Feature Is Only For Bot",
    wait: "waiting ", // defult: "In process...",
    linkm: "not", // defult: "Where is the link?",    error: "errow is this ", / defult: "Error!!",
    endLimit: "full limid", // defult: "Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours",
    ban: "band now", // defult: "You have been banned by the owner, if you want to be unbanned, chat owner.",
    nsfw: "not", // defult: "The nsfw feature has not been activated, please contact the admin to activate",
    banChat: "band this chat", // defult: "The bot was banned in this group, please contact the owner to unban",
  },
  setting: {
    blockchat: [], // Your block chat Jids
  },
  auto: {
    chat: {
      group: false, // Chat Bot In Group | u can set true or false
      inbox: true, // chat bot in inbox | u can set true or false
    },
    reply: {
      sticker: true, // Boolean | ===== It not created now ======
      audio: true, // Boolean | ===== It not created now ======
    },
    presence: {
      is: true, // U Can on or off this () | u can set true or false
      value: "typing", // It has two types | u can set 'recoding' or 'typing'
    },
    read: false, // Boolean | ===== It not created now ======
  },
};
