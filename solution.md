Randy Van, 2020-08-18

# Implementation

- What libraries did you add? What are they used for?
  Prettier/eslint (code consistency), randomcolor (just to quickly make distinct colors per element), konva & react-konva (for drawing)

- What's the command to start the application locally? (default is `npm start`)
  still using "npm run start"

# General

- How much time did you spend on this? If you had more time, what further improvements or new features would you add?
  ~10 hrs, would probably add better color wheel for contrast, responsive design, better point coordinate translation, z-index layering, better UI overall.
  Get rid of warnings / hardcodings for speed of development. Improve render speed with better konva conventions. Add scroll/pan feature for floorplan.
- What part are you most proud of and why?
  never used konva / react-konva, had to do research on it and seemed like it matched this use-case well.
- Which parts did you spend the most time with? What did you find most difficult?
  never designed for drawing generic polygons, usually use given assets or popular open-source assets.

# Other

- Anything else you'd like us to know (about your implementation or otherwise)?
  didnt use redux or typescript for speed of implementation / size of app, but for full site they would be valuable. In prod, more time spent on infrastructure.
- How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.
  there is confusion on the WCS coordinate, seems like there are python libraries for it but then the test is mixing technologies, and is more confusion than
  there is a need for. Please use pixels and keep it simple, the whole translation process isnt a good part of testing how well people would know react/js.
  The boilerplate app was made with create-react-app, and would be better test if using vanilla react app.
