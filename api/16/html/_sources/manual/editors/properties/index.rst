
#################
Properties Editor
#################

.. figure:: /images/editors-properties-tabs.png
   
   The Properties editor header.

The properties editor is an essential part of the development process. There, you can 
change almost all properties of the selected object, scene, camera, etc, like:

- The screen resolution;
- Frames per second;
- Background color;
- Name and position of selected object;
- Constraints and modifiers;
- Materials and textures properties;
- Physics properties of selected object;
- Much more.

In this section you have a detailed description about each tab of the Properties editor.

.. note:: The **Render layers** and **Particles** tabs don't apply to UPBGE, so they won't
   be explained here.
   
.. note:: This section will explain properties belonging to UPBGE only (Blender Game renderer) or, at most, relevant properties for game development. For other Blender properties, see the `official Blender manual <https://docs.blender.org/manual/en/dev/editors/properties_editor.html>`__.

.. toctree::
   :maxdepth: 1
   :caption: General

   render.rst
   scene.rst
   world.rst
   object.rst
   constraints.rst
   texture.rst
   physics.rst

.. toctree::
   :maxdepth: 1
   :caption: Object-specific

   materials.rst
   data.rst