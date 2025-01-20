
*******************
Compatibility Notes
*******************

RanGE VS Blender
================

Range Game Engine is fully integrated into Blender environment, but it doesn't mean it supports 
all the features that Blender provides. Here's some compatibility info about various 
features present in Blender relative to Range.

.. _compatibility-supported-objects:

.. rubric:: Object types supported

- :ref:`datablock-armature`
- :ref:`datablock-camera`
- :ref:`datablock-empty`
- :ref:`datablock-lamp`
- :ref:`datablock-mesh`
- :ref:`datablock-text`

.. note:: Any other object type (like Curve, Speaker, Force Field, etc) will not be rendered into game. A Curve Object can be converted to :ref:`datablock-mesh` though.

.. _compatibility-supported-datablocks:

.. rubric:: Data-blocks supported

- :ref:`datablock-action`
- :ref:`datablock-armature`
- :ref:`datablock-camera`
- :ref:`datablock-group`
- :ref:`datablock-image`
- :ref:`datablock-lamp`
- :ref:`datablock-library`
- :ref:`datablock-material`
- :ref:`datablock-mesh`
- :ref:`datablock-object`
- :ref:`datablock-scene`
- Shapekey (along with :ref:`datablock-action`, otherwise unused)
- :ref:`datablock-sound`
- :ref:`datablock-text` (partially)
- :ref:`datablock-texture` (only :ref:`datablock-image` based, procedural not supported)
- :ref:`datablock-world`

.. note:: Any other data-block type (like Line Styles, Particles, Brushes, etc) have no use or will not be rendered into game.

.. note:: :ref:`datablock-text` only work partially, with advanced formatting features currently not supported.