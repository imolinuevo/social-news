# Requirements

1. Main panel
   1.1. Top panel - Left logo: link to home - Search bar: on enter filter posts by title, hide trending - Login button: on click open login modal - User button: on click expand options
   1.2. Left panel - Dynamic list of items with subitems - Join button: on click show login modal on register version
   1.3. Central panel
   1.3.1. Trending today - List of posts: only shown in home without filters
   1.3.2. Popular filters - Filter by country - Filter by new, top and rising (hidden)
   1.3.3. Post list - Upvote or downvote buttons with result: on click save user vote - Post card description - Upper community bar: link to community - Full title: on click open post panel - Faded description - Link to comments with count: on click show comments in modal
   1.4. Right panel - Accordion of list of list of items with subitems: on click navigate to community
   1.5. Footer panel - Links to static pages and license
   1.6. Login modal - Can only be oppened if not logged in - Log in or register form
2. Post detail panel
   - On ESC close modal
   - On click outside the panel: close modal
     2.1. Top panel - Upvote or downvote buttons with result: on click save user vote - Shortened title - Close button
     2.2. Content panel - Post card description - Upper community bar: link to community - Full title: on click open post panel - Full description - Comments count
     2.3. Comments panel - If logged in: show add comment form - List of comment: show user icon, name, time posted and upvote or downvote buttons with count
     2.4. Description panel - Small bakground picture - Icon with community name: click navigate to community - Small description - Creation date - Follower count and online count
     2.5. Suggest panel - List of small posts with community, shortened title, upvote %, comements count and date
     2.6. Policy panel - Links to static pages and license
3. Community view conditions
   3.1. Search bar - Add pill with name and close button: on click navigate to home
   3.2. Banner - Hide trending and show community background picture
   3.3. Right panel - Hide community accordion show about community and rules - About community - Small description - Creation date - Follower count and online count - Rules: expandable accordion list

# Docker setup

## Docker build

`docker build -t social-news .`

## Docker run

`docker run -p 8000:80 -d --name social-news social-news`

# CLI Commands

## Modules and routing

- Generate main panel module with self routing and path
  `ng generate module main-panel --module app.module --routing true --route main`
- Genarte community panel module with self routing and path
  `ng generate module community-panel --module app.module --route r`
- Generate post detail panel inside main panel module with self routing and path
  `ng generate module post-detail-panel --module main-panel --route detail`
- Generate shared module without routing
  `ng g shared`

## Components

- Generate main top panel inside main module
  `ng g c main-panel/main-top-panel --style css --module main-panel`

## Services

- Generate main panel service
  `ng g s main-panel/main`

# Testing

`ng test --watch=false`

# Linting

`ng lint`
