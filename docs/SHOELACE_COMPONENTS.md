# Shoelace Component Reference

Shoelace is a framework-agnostic library of Web Components. This reference lists every available component with notable parameters.

## Alert (`<sl-alert>`)
- **variant**: `primary`, `success`, `neutral`, `warning`, `danger`
- **open**: show or hide the alert
- **closable**: display a close button
- **duration**: auto-dismiss timer in milliseconds

## Animated Image (`<sl-animated-image>`)
- **src**: image source
- **alt**: alternative text
- **play**: starts animation automatically
- **loop**: repeats animation when finished

## Animation (`<sl-animation>`)
- **name**: animation preset to use
- **play**, **pause**: control playback
- **duration**, **easing**, **iteration-count**: timing options

## Avatar (`<sl-avatar>`)
- **image**: avatar image source
- **label**: accessible label
- **initials**: fallback initials
- **shape**: `circle` or `square`

## Badge (`<sl-badge>`)
- **variant**: `primary`, `success`, `neutral`, `warning`, `danger`
- **pill**: rounded badge

## Breadcrumb (`<sl-breadcrumb>`)
- Container for breadcrumb navigation items

## Breadcrumb Item (`<sl-breadcrumb-item>`)
- **href** and **target**: turn item into a link

## Button (`<sl-button>`)
- **variant**: `default`, `primary`, `success`, `neutral`, `warning`, `danger`, `text`
- **size**: `small`, `medium`, `large`
- **outline**, **pill**, **disabled**, **loading**: style and state controls
- **href** and **target**: behave like a link

## Button Group (`<sl-button-group>`)
- **label**: accessible group label
- **vertical**: stack buttons vertically

## Card (`<sl-card>`)
- Slots: `header`, default (body), `footer`
- **pill**: rounded corners
- **shadow**: `none`, `small`, `medium`, `large`

## Carousel (`<sl-carousel>`)
- **navigation** and **pagination**: toggle controls
- **autoplay** and **interval**: automatic slide switching
- **loop**: wrap slides

## Carousel Item (`<sl-carousel-item>`)
- Represents a slide inside `<sl-carousel>`

## Checkbox (`<sl-checkbox>`)
- **checked**, **indeterminate**, **disabled**: state attributes
- **value**: submitted value when checked

## Color Picker (`<sl-color-picker>`)
- **value**: selected color
- **format**: `hex`, `rgb`, `hsl`
- **inline**, **no-header**, **uppercase**: presentation options

## Copy Button (`<sl-copy-button>`)
- **value**: text to copy
- **from**: CSS selector for source element
- **copied-text**: message shown after copy

## Details (`<sl-details>`)
- **summary**: summary text
- **open**: expand or collapse content

## Dialog (`<sl-dialog>`)
- **open**: show or hide the dialog
- **label**: accessible title
- **no-header**, **closable**: structural controls

## Divider (`<sl-divider>`)
- **vertical**: render a vertical divider

## Drawer (`<sl-drawer>`)
- **open**: show or hide drawer
- **placement**: `top`, `end`, `bottom`, `start`
- **label**: accessible title
- **no-header**, **contained**, **closable**: presentation options

## Dropdown (`<sl-dropdown>`)
- **distance** and **skidding**: offset positioning
- **placement**: popper.js placement options
- **hoist**: render in document body

## Format Bytes (`<sl-format-bytes>`)
- **value**: number of bytes
- **unit**: display unit
- **compact**: use compact notation

## Format Date (`<sl-format-date>`)
- **date**: date value
- **format**: formatting string
- **locale**: locale code

## Format Number (`<sl-format-number>`)
- **value**: number to format
- **type**: `decimal`, `percent`, `currency`
- **currency**: ISO currency code

## Icon (`<sl-icon>`)
- **name**: icon name from library
- **src**: external SVG source
- **label**: accessible description
- **library**: custom icon library name

## Icon Button (`<sl-icon-button>`)
- **name** or **src**: icon source
- **label**: accessible label
- **disabled**: disable interaction

## Image Comparer (`<sl-image-comparer>`)
- **value**: initial comparison position
- **vertical**: use vertical slider

## Include (`<sl-include>`)
- **src**: resource URL to include
- **mode**: `cors`, `no-cors`, `same-origin`
- **allow-scripts**: permit inline scripts

## Input (`<sl-input>`)
- **type**: text, email, password, etc.
- **size**: `small`, `medium`, `large`
- **placeholder**: hint text
- **clearable**, **disabled**, **readonly**: state controls
- **value**: current input value

## Menu (`<sl-menu>`)
- **value**: selected item value
- **multiple**: allow multiple selection

## Menu Item (`<sl-menu-item>`)
- **value**: item value
- **checked**, **disabled**: state attributes

## Menu Label (`<sl-menu-label>`)
- Section label inside menus

## Mutation Observer (`<sl-mutation-observer>`)
- **attr**, **child-list**, **subtree**: observation options
- **disabled**: pause watching

## Option (`<sl-option>`)
- **value**: option value
- **disabled**: disable selection

## Popup (`<sl-popup>`)
- **active**: show or hide popup
- **placement**, **strategy**, **distance**, **skidding**: positioning options
- **anchor**: ID of the anchor element

## Progress Bar (`<sl-progress-bar>`)
- **value**: current progress
- **indeterminate**: show pending state
- **min**, **max**: range values

## Progress Ring (`<sl-progress-ring>`)
- **value**: current progress
- **min**, **max**: range values

## QR Code (`<sl-qr-code>`)
- **value**: data to encode
- **label**: accessible label
- **size**: dimensions in pixels

## Radio (`<sl-radio>`)
- **value**: submitted value when checked
- **checked**, **disabled**: state attributes

## Radio Button (`<sl-radio-button>`)
- Button-styled radio input

## Radio Group (`<sl-radio-group>`)
- **value**: current selection
- **label**: accessible label
- **disabled**: disable group

## Range (`<sl-range>`)
- **min**, **max**, **step**: numeric constraints
- **value**: selected value
- **disabled**: disable input

## Rating (`<sl-rating>`)
- **value**: rating value
- **max**: number of symbols
- **precision**: step size
- **readonly**, **disabled**: state attributes

## Relative Time (`<sl-relative-time>`)
- **date**: target date or time
- **numeric**: `auto` or `always`
- **sync**: auto update as time passes

## Resize Observer (`<sl-resize-observer>`)
- **disabled**: pause observation

## Select (`<sl-select>`)
- **value**: selected option(s)
- **multiple**: allow multiple selection
- **clearable**: show clear button
- **disabled**, **hoist**, **placeholder**: behavior controls

## Skeleton (`<sl-skeleton>`)
- **effect**: `pulse` or `sheen`

## Spinner (`<sl-spinner>`)
- **size**: `small`, `medium`, `large`
- **paused**: stop animation

## Split Panel (`<sl-split-panel>`)
- **vertical**: vertical layout
- **position**: splitter position
- **snap**: array of snap points
- **disabled**: lock splitter

## Switch (`<sl-switch>`)
- **checked**: on/off state
- **disabled**: disable control

## Tab (`<sl-tab>`)
- **panel**: linked `<sl-tab-panel>`
- **active**, **closable**, **disabled**: state attributes

## Tab Group (`<sl-tab-group>`)
- **placement**: `top`, `bottom`, `start`, `end`
- **activation**: `auto` or `manual`

## Tab Panel (`<sl-tab-panel>`)
- **name**: identifier linked to `<sl-tab>`
- **active**: show or hide panel

## Tag (`<sl-tag>`)
- **variant**: `primary`, `success`, `neutral`, `warning`, `danger`
- **size**: `small`, `medium`, `large`
- **pill**, **removable**: style and behavior options

## Textarea (`<sl-textarea>`)
- **size**: `small`, `medium`, `large`
- **rows**: number of text rows
- **placeholder**: hint text
- **value**: current text
- **disabled**, **readonly**, **resize**, **clearable**: state controls

## Tooltip (`<sl-tooltip>`)
- **content**: tooltip text
- **placement**: positioning
- **distance**, **skidding**, **hoist**: popper.js options
- **open**: show or hide tooltip

## Tree (`<sl-tree>`)
- **selection**: `single`, `multiple`, `leaf`
- **open**: expand all nodes

## Tree Item (`<sl-tree-item>`)
- **expanded**, **selected**, **disabled**: state attributes

## Visually Hidden (`<sl-visually-hidden>`)
- Hide content visually while keeping it accessible to screen readers

