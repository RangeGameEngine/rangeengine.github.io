.. _datablock-object:

======
Object
======

.. seealso::
   See the Python reference of common objects in :class:`KX_GameObject`.

.. figure:: /images/objects-index-supported_types_highlighted.png
   
   Supported object types in Add menu.

RanGE supports several object types from Blender, as listed below. The unsupported object 
types (like Curve, Lattice, etc) can be present at Blender scene, but will be 
removed automatically at game start, so they should not be taken in account in game 
development process.

.. note:: 
   Definitions present in this section are related to object's behavior at game runtime. 
   For definitions about object editing inside Blender editor, refer to 
   :doc:`/manual/editors/properties/index`.

Each object type will be explained at its respective page, but all of them have common 
attributes and features which will be explained in this page. Those attributes and 
features are:

Ability to contain logic and game properties
   This means that logic and property changing is not bound to specific object types: any 
   object can run logic. This should be used with caution, as scattering logic and 
   properties across multiple objects can turn any project into a mess.
   
Ability to have a physics type
   This means that any object can react to physics, even if this object can't be visible 
   at runtime (as any object other than Mesh objects). However, only Mesh objects can 
   benefit from certain collision bounds, like Triangle Mesh and Convex Hull.
   
World and local transformation values
   Even non-visible objects fit a point in scene space. These transformation values are 
   stored in object in a form of world and local transforms (like position, scale and 
   orientation). Note that local transforms are relative to object's parent (or world 
   center, if it lacks a parent).

Ability to have animations playing on it
   Although Mesh and Armature objects benefits more from this feature (with Shape Keys 
   and Armature actions, respectively), any object can be animated at runtime, from 
   transformations to some specific object attributes.
   
General object values
   These general values varies from object color, slow parent's time offset, etc.

Those attributes and features are present in every object type, with no exception. Other 
attributes depends on specific object types, like Lamps or Cameras.

.. toctree::
   :maxdepth: 1
   :caption: Object Types
   
   mesh
   text
   armature
   empty
   camera
   lamp
   
