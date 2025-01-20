KX_MovementSensor(SCA_ISensor)
===============================

base class --- :class:`SCA_ISensor`

.. class:: KX_MovementSensor(SCA_ISensor)

   Movement sensor detects movement of owner object at a given threshold.

   .. attribute:: axis

      The axis which the movement will be detected. Can be one of :ref:`these <movement-sensor-axis-constants>` constants.

      :type: int

   .. attribute:: threshold

      Minimum of movement needed to trigger the sensor.

      :type: float