.. _bpy.types.ParentActuator:

***************
Parent Actuator
***************

.. seealso::
   See the Python reference of this logic brick in :class:`KX_ParentActuator`.

The *Parent Actuator* enables the user to change the parent relationships of the current object.

.. figure:: /images/logic-actuators-types-parent-node.jpg
   :width: 271px

   Parent Actuator.


Properties
==========

Scene
   The type of parenting operation.

   Set Parent
      Make this object to be current object's parent.

      Parent Object
         Name of parent object.
      Compound
         Add this object shape to the parent shape (only if the parent shape is already compound).
      Ghost
         Make this object ghost while parented.

   Remove Parent
      Remove all parents of current object.


Example
=======
