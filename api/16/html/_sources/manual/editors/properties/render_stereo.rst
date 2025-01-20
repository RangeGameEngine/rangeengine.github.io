
*************
Stereo Camera
*************

Stereo rendering allow you to generate images that appear three-dimensional when wearing 
special glasses.
This is achieved by rendering two separate images from cameras that are a small distance 
apart from each other, simulating how our own eyes see. When viewing a stereo image, one 
eye is limited to seeing one of the images, and the other eye sees the second image. Our 
brain is able to merge these together, making it appear that we are looking at a 3D object 
rather than a flat image. See 
`Stereoscopy <https://en.wikipedia.org/wiki/Stereoscopy>`__ 
for more information on different stereoscopic viewing methods.


Stereo Settings
===============

.. figure:: /images/editors-properties-render-stereo.png

   Stereo settings.

None
   Disable stereo rendering.
   
Stereo Mode
   Specifies the way in which the left-eye image and the right-eye image pixels are put together
   during rendering. This must be selected according to the type of apparatus available to
   display the appropriate images to the viewer's eyes.

   Anaglyph
      One frame is displayed with both images color encoded with red-blue filters. This mode 
      only requires 
      `glasses with color filters <https://en.wikipedia.org/wiki/Stereoscopy#Color_anaglyph_systems>`__, 
      there are no special requirements for the display screen and GPU.
   Quad Buffer
      Uses double buffering with a buffer for each eye, totaling four buffers
      (Left Front, Left Back, Right Front and Right Back), allowing to swap the buffers for both eyes in sync.
      See `Quad Buffering <https://en.wikipedia.org/wiki/Quad_buffering>`__ for more information.
   Side by Side
      Lines are displayed one after the other, so providing the two images in two frames side-by-side.
   Above-Below
      Frames are displayed one after the other, so providing the two images in two frames, one above the other.
   Interlaced
      One frame is displayed with the two images on alternate lines of the display.
   Vinterlaced
      One frame is displayed with both images displayed on alternate columns of the display.
      This works with some 'autostereo displays'.
   3D TV Top-Bottom
      One frame displays the left image above and the right image below.
      The images are squashed vertically to fit. This mode is designed for passive 3D TV.

Eye Separation
   This value is extremely important. It determines how far apart the two image-capturing 
   cameras are, and thus how "deep" the scene appears. Too small a value and the image 
   appears flat; too high a value can result in headaches and eye strain. The ideal value 
   mimics the separation of the viewer's two eyes.
