Noise Utilities (mathutils.noise)
=================================

.. module:: mathutils.noise

The Blender noise module

.. function:: cell(position)

   Returns cell noise value at the specified position.

   :arg position: The position to evaluate the selected noise function at.
   :type position: :class:`mathutils.Vector`
   :return: The cell noise value.
   :rtype: float


.. function:: cell_vector(position)

   Returns cell noise vector at the specified position.

   :arg position: The position to evaluate the selected noise function at.
   :type position: :class:`mathutils.Vector`
   :return: The cell noise vector.
   :rtype: :class:`mathutils.Vector`


.. function:: fractal(position, H, lacunarity, octaves, noise_basis=noise.types.STDPERLIN)

   Returns the fractal Brownian motion (fBm) noise value from the noise basis at the specified position.

   :arg position: The position to evaluate the selected noise function at.
   :type position: :class:`mathutils.Vector`
   :arg H: The fractal increment factor.
   :type H: float
   :arg lacunarity: The gap between successive frequencies.
   :type lacunarity: float
   :arg octaves: The number of different noise frequencies used.
   :type octaves: int
   :arg noise_basis: The type of noise to be evaluated.
   :type noise_basis: Value in noise.types or int
   :return: The fractal Brownian motion noise value.
   :rtype: float


.. function:: hetero_terrain(position, H, lacunarity, octaves, offset, noise_basis=noise.types.STDPERLIN)

   Returns the heterogeneous terrain value from the noise basis at the specified position.

   :arg position: The position to evaluate the selected noise function at.
   :type position: :class:`mathutils.Vector`
   :arg H: The fractal dimension of the roughest areas.
   :type H: float
   :arg lacunarity: The gap between successive frequencies.
   :type lacunarity: float
   :arg octaves: The number of different noise frequencies used.
   :type octaves: int
   :arg offset: The height of the terrain above 'sea level'.
   :type offset: float
   :arg noise_basis: The type of noise to be evaluated.
   :type noise_basis: Value in noise.types or int
   :return: The heterogeneous terrain value.
   :rtype: float


.. function:: hybrid_multi_fractal(position, H, lacunarity, octaves, offset, gain, noise_basis=noise.types.STDPERLIN)

   Returns hybrid multifractal value from the noise basis at the specified position.

   :arg position: The position to evaluate the selected noise function at.
   :type position: :class:`mathutils.Vector`
   :arg H: The fractal dimension of the roughest areas.
   :type H: float
   :arg lacunarity: The gap between successive frequencies.
   :type lacunarity: float
   :arg octaves: The number of different noise frequencies used.
   :type octaves: int
   :arg offset: The height of the terrain above 'sea level'.
   :type offset: float
   :arg gain: Scaling applied to the values.
   :type gain: float
   :arg noise_basis: The type of noise to be evaluated.
   :type noise_basis: Value in noise.types or int
   :return: The hybrid multifractal value.
   :rtype: float


.. function:: multi_fractal(position, H, lacunarity, octaves, noise_basis=noise.types.STDPERLIN)

   Returns multifractal noise value from the noise basis at the specified position.

   :arg position: The position to evaluate the selected noise function at.
   :type position: :class:`mathutils.Vector`
   :arg H: The fractal increment factor.
   :type H: float
   :arg lacunarity: The gap between successive frequencies.
   :type lacunarity: float
   :arg octaves: The number of different noise frequencies used.
   :type octaves: int
   :arg noise_basis: The type of noise to be evaluated.
   :type noise_basis: Value in noise.types or int
   :return: The multifractal noise value.
   :rtype: float


.. function:: noise(position, noise_basis=noise.types.STDPERLIN)

   Returns noise value from the noise basis at the position specified.

   :arg position: The position to evaluate the selected noise function at.
   :type position: :class:`mathutils.Vector`
   :arg noise_basis: The type of noise to be evaluated.
   :type noise_basis: Value in noise.types or int
   :return: The noise value.
   :rtype: float


.. function:: noise_vector(position, noise_basis=noise.types.STDPERLIN)

   Returns the noise vector from the noise basis at the specified position.

   :arg position: The position to evaluate the selected noise function at.
   :type position: :class:`mathutils.Vector`
   :arg noise_basis: The type of noise to be evaluated.
   :type noise_basis: Value in noise.types or int
   :return: The noise vector.
   :rtype: :class:`mathutils.Vector`


.. function:: random()

   Returns a random number in the range [0, 1].

   :return: The random number.
   :rtype: float


.. function:: random_unit_vector(size=3)

   Returns a unit vector with random entries.

   :arg size: The size of the vector to be produced.
   :type size: Int
   :return: The random unit vector.
   :rtype: :class:`mathutils.Vector`


.. function:: ridged_multi_fractal(position, H, lacunarity, octaves, offset, gain, noise_basis=noise.types.STDPERLIN)

   Returns ridged multifractal value from the noise basis at the specified position.

   :arg position: The position to evaluate the selected noise function at.
   :type position: :class:`mathutils.Vector`
   :arg H: The fractal dimension of the roughest areas.
   :type H: float
   :arg lacunarity: The gap between successive frequencies.
   :type lacunarity: float
   :arg octaves: The number of different noise frequencies used.
   :type octaves: int
   :arg offset: The height of the terrain above 'sea level'.
   :type offset: float
   :arg gain: Scaling applied to the values.
   :type gain: float
   :arg noise_basis: The type of noise to be evaluated.
   :type noise_basis: Value in noise.types or int
   :return: The ridged multifractal value.
   :rtype: float


.. function:: seed_set(seed)

   Sets the random seed used for random_unit_vector, random_vector and random.

   :arg seed: Seed used for the random generator.
      When seed is zero, the current time will be used instead.
   :type seed: Int


.. function:: turbulence(position, octaves, hard, noise_basis=noise.types.STDPERLIN, amplitude_scale=0.5, frequency_scale=2.0)

   Returns the turbulence value from the noise basis at the specified position.

   :arg position: The position to evaluate the selected noise function at.
   :type position: :class:`mathutils.Vector`
   :arg octaves: The number of different noise frequencies used.
   :type octaves: int
   :arg hard: Specifies whether returned turbulence is hard (sharp transitions) or soft (smooth transitions).
   :type hard: :boolean
   :arg noise_basis: The type of noise to be evaluated.
   :type noise_basis: Value in mathutils.noise.types or int
   :arg amplitude_scale: The amplitude scaling factor.
   :type amplitude_scale: float
   :arg frequency_scale: The frequency scaling factor
   :type frequency_scale: Value in noise.types or int
   :return: The turbulence value.
   :rtype: float


.. function:: turbulence_vector(position, octaves, hard, noise_basis=noise.types.STDPERLIN, amplitude_scale=0.5, frequency_scale=2.0)

   Returns the turbulence vector from the noise basis at the specified position.

   :arg position: The position to evaluate the selected noise function at.
   :type position: :class:`mathutils.Vector`
   :arg octaves: The number of different noise frequencies used.
   :type octaves: int
   :arg hard: Specifies whether returned turbulence is hard (sharp transitions) or soft (smooth transitions).
   :type hard: :boolean
   :arg noise_basis: The type of noise to be evaluated.
   :type noise_basis: Value in mathutils.noise.types or int
   :arg amplitude_scale: The amplitude scaling factor.
   :type amplitude_scale: float
   :arg frequency_scale: The frequency scaling factor
   :type frequency_scale: Value in noise.types or int
   :return: The turbulence vector.
   :rtype: :class:`mathutils.Vector`


.. function:: variable_lacunarity(position, distortion, noise_type1=noise.types.STDPERLIN, noise_type2=noise.types.STDPERLIN)

   Returns variable lacunarity noise value, a distorted variety of noise, from noise type 1 distorted by noise type 2 at the specified position.

   :arg position: The position to evaluate the selected noise function at.
   :type position: :class:`mathutils.Vector`
   :arg distortion: The amount of distortion.
   :type distortion: float
   :arg noise_type1: The type of noise to be distorted.
   :type noise_type1: Value in noise.types or int
   :arg noise_type2: The type of noise used to distort noise_type1.
   :type noise_type2: Value in noise.types or int
   :return: The variable lacunarity noise value.
   :rtype: float


.. function:: voronoi(position, distance_metric=noise.distance_metrics.DISTANCE, exponent=2.5)

   Returns a list of distances to the four closest features and their locations.

   :arg position: The position to evaluate the selected noise function at.
   :type position: :class:`mathutils.Vector`
   :arg distance_metric: Method of measuring distance.
   :type distance_metric: Value in noise.distance_metrics or int
   :arg exponent: The exponent for Minkowski distance metric.
   :type exponent: float
   :return: A list of distances to the four closest features and their locations.
   :rtype: list of four floats, list of four :class:`mathutils.Vector` types


