// Flow defaults to the bootstrap paper theme, and the player is setup to allow a different theme to be inputted as a Flow URL query parameter. This snippet allows you to specify a different default player without removing the ability to dynamically change using a query parameter (as would be the case if you simply hard-coded something like theme: 'slate'; ). This line replaces the following line in a default flow player:  theme: queryParameters['theme']


theme: queryParameters['theme'] != null ? queryParameters['theme'] : 'cerulean'
