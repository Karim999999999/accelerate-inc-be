welcome: route: get articles - filter: categories - req object: plain

drafts: route : get aticles - filter: status - req object: user get/put(id)

discover: route : get articles - filter: createdAt

- CATEGORY: SELECT? ONLY ONE CATEGORY??? maybe a multiple selection ticks would be more appropriate wouldn't it? (i.e. input:checkbox)

  articles to edit: (Api to use: [get] user/:USERid/status/:EDITOR) : meaning every editor has his own bunch of articles?

  new articles? New in what sense if they have an editor assigned? if yes, what's the criteria to assign the editor?

published: route : get aticles - filter: status - req object: user get/put(id) (means token rights?)

articles under review: route: get articlesByUser (meaning by editor?) - req object what? if i'm a editor I have articles assigned already right?

Sent for review logically should precede under review right? same question, available to all editors? so the filter would just be the role and not the user right?
