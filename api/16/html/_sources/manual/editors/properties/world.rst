
*****
World
*****

**World** settings enable you to set some basic effects which affect all scenes throughout 
your game, so giving it a feeling of unity and continuity. These include ambient light, 
depth effects (mist), etc.

World
=====

.. figure:: /images/editors-properties-world-world.png

   World tab's World panel.

These color settings allow you to set some general lighting effects for your game.

Paper Sky
   Flatten blend or texture coordinates.

Blend Sky
   Render background with natural progression from horizon to zenith.

Real Sky
   Render background with a real horizon, relative to the camera angle.

Horizon Color
   The RGB color at the horizon; i.e. the color and intensity of any areas in the scene 
   which are not filled explicitly.

Zenith Color
   The RGB color at the zenith.
   
Ambient Color
   Ambient light mimics an overall background illumination obtained from diffusing 
   surfaces. Its general color and intensity are set by these controls.

Exposure
   Ammount of exponential color correction for light.
   
Range
   The color range that will be mapped to 0-1.

Sun Size
   Control the Sun size.

Sun Turbidity
   Atmospheric turbidity.

Ground Color
   Distance to ground.

Environment Lighting
======================

.. figure:: /images/editors-properties-world-env_lighting.png

   World tab's Environment Lighting panel.

**Environment Light** provides light coming from all directions.

Light is calculated with a ray-traced method which is the same as that used by Ambient 
Occlusion. The difference is that Environment lighting takes into account the "ambient" 
parameter of the material shading settings, which indicates the amount of ambient 
light/color that that material receives.

Also, you can choose the environment color source (white, sky color, sky texture) and 
the light energy.

Energy
   Defines the strength of environment light.
   
Environment Color
   Defines where the color of the environment light comes from.

Using both settings simultaneously produces better global lighting. It is good for 
mimicking the sky in outdoor lighting.


Mist
====

.. figure:: /images/editors-properties-world-mist.png

   World tab's Mist panel.

*Mist* can greatly enhance the illusion of depth in your rendering. To create *Mist*, 
RanGE makes objects farther away more transparent (decreasing their Alpha value) so that 
they mix more of the background color with the object color. With *Mist* enabled, the 
further the object is away from the camera the less its alpha value will be.

Mist
   Toggles mist on and off.
   
Falloff
   Sets the shape of the falloff of the mist.
   
Start
   The starting distance of the mist effect, measured from the camera. No misting will 
   take place for objects closer than this distance.
   
Depth
   The depth at which the opacity of objects falls to zero.
   
Minimum intensity
   Overall minimum intensity of the mist effect.
