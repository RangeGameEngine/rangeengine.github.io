SCA_ILogicBrick(EXP_Value)
==========================

base class --- :class:`EXP_Value`

.. class:: SCA_ILogicBrick(EXP_Value)

   Base class of all :doc:`/manual/logic/sensors/index`, :doc:`/manual/logic/controllers/index` and :doc:`/manual/logic/actuators/index`.

   .. attribute:: executePriority

      This determines the order controllers are evaluated, and actuators are activated (lower priority is executed first).

      :type: int

   .. attribute:: owner

      The game object this logic brick is attached to (read-only).
      
      :type: :class:`KX_GameObject` or None in exceptional cases.

   .. attribute:: name

      The name of this logic brick (read-only).
      
      :type: str
