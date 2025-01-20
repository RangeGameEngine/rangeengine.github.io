Math Types & Utilities (mathutils)
==================================

.. module:: mathutils

This module provides access to math operations.

.. note::

   Classes, methods and attributes that accept vectors also accept other numeric sequences,
   such as tuples, lists.

Submodules:

.. toctree::
   :maxdepth: 1
   :glob:

   mathutils.bvhtree.rst
   mathutils.geometry.rst
   mathutils.interpolate.rst
   mathutils.kdtree.rst
   mathutils.noise.rst

The :mod:`mathutils` module provides the following classes:

- :class:`Color`,
- :class:`Euler`,
- :class:`Matrix`,
- :class:`Quaternion`,
- :class:`Vector`,

.. literalinclude:: __/examples/mathutils.py

Color
-----

.. class:: Color(rgb)

   This object gives access to Colors in Blender.

   :param rgb: (r, g, b) color values
   :type rgb: 3d vector



   .. literalinclude:: __/examples/mathutils.Color.py

   .. function:: copy()
   
      Returns a copy of this color.
   
      :return: A copy of the color.
      :rtype: :class:`Color`
   
      .. note:: use this to get a copy of a wrapped color with
         no reference to the original data.


   .. function:: freeze()
   
      Make this object immutable.
   
      After this the object can be hashed, used in dictionaries & sets.
   
      :return: An instance of this object.


   .. attribute:: b

      Blue color channel.
      
      :type: float


   .. attribute:: g

      Green color channel.
      
      :type: float


   .. attribute:: h

      HSV Hue component in [0, 1].
      
      :type: float


   .. attribute:: hsv

      HSV Values in [0, 1].
      
      :type: float triplet


   .. attribute:: is_frozen

      True when this object has been frozen (read-only).
      
      :type: boolean


   .. attribute:: is_wrapped

      True when this object wraps external data (read-only).
      
      :type: boolean


   .. attribute:: owner

      The item this is wrapping or None  (read-only).


   .. attribute:: r

      Red color channel.
      
      :type: float


   .. attribute:: s

      HSV Saturation component in [0, 1].
      
      :type: float


   .. attribute:: v

      HSV Value component in [0, 1].
      
      :type: float

Euler
-----

.. class:: Euler(angles, order='XYZ')

   This object gives access to Eulers in Blender.

   :param angles: Three angles, in radians.
   :type angles: 3d vector
   :param order: Optional order of the angles, a permutation of ``XYZ``.
   :type order: str



   .. literalinclude:: __/examples/mathutils.Euler.py

   .. function:: copy()
   
      Returns a copy of this euler.
   
      :return: A copy of the euler.
      :rtype: :class:`Euler`
   
      .. note:: use this to get a copy of a wrapped euler with
         no reference to the original data.


   .. function:: freeze()
   
      Make this object immutable.
   
      After this the object can be hashed, used in dictionaries & sets.
   
      :return: An instance of this object.


   .. method:: make_compatible(other)
   
      Make this euler compatible with another,
      so interpolating between them works as intended.
   
      .. note:: the rotation order is not taken into account for this function.


   .. method:: rotate(other)
   
      Rotates the euler by another mathutils value.
   
      :arg other: rotation component of mathutils value
      :type other: :class:`Euler`, :class:`Quaternion` or :class:`Matrix`


   .. method:: rotate_axis(axis, angle)
   
      Rotates the euler a certain amount and returning a unique euler rotation
      (no 720 degree pitches).
   
      :arg axis: single character in ['X, 'Y', 'Z'].
      :type axis: string
      :arg angle: angle in radians.
      :type angle: float


   .. method:: to_matrix()
   
      Return a matrix representation of the euler.
   
      :return: A 3x3 roation matrix representation of the euler.
      :rtype: :class:`Matrix`


   .. method:: to_quaternion()
   
      Return a quaternion representation of the euler.
   
      :return: Quaternion representation of the euler.
      :rtype: :class:`Quaternion`


   .. method:: zero()
   
      Set all values to zero.


   .. attribute:: is_frozen

      True when this object has been frozen (read-only).
      
      :type: boolean


   .. attribute:: is_wrapped

      True when this object wraps external data (read-only).
      
      :type: boolean


   .. attribute:: order

      Euler rotation order.
      
      :type: string in ['XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX']


   .. attribute:: owner

      The item this is wrapping or None  (read-only).


   .. attribute:: x

      Euler axis angle in radians.
      
      :type: float


   .. attribute:: y

      Euler axis angle in radians.
      
      :type: float


   .. attribute:: z

      Euler axis angle in radians.
      
      :type: float

Matrix
------

.. class:: Matrix([rows])

   This object gives access to Matrices in Blender, supporting square and rectangular
   matrices from 2x2 up to 4x4.

   :param rows: Sequence of rows.
      When ommitted, a 4x4 identity matrix is constructed.
   :type rows: 2d number sequence



   .. literalinclude:: __/examples/mathutils.Matrix.py

   .. classmethod:: Identity(size)
   
      Create an identity matrix.
   
      :arg size: The size of the identity matrix to construct [2, 4].
      :type size: int
      :return: A new identity matrix.
      :rtype: :class:`Matrix`


   .. classmethod:: OrthoProjection(axis, size)
   
      Create a matrix to represent an orthographic projection.
   
      :arg axis: Can be any of the following: ['X', 'Y', 'XY', 'XZ', 'YZ'],
         where a single axis is for a 2D matrix.
         Or a vector for an arbitrary axis
      :type axis: string or :class:`Vector`
      :arg size: The size of the projection matrix to construct [2, 4].
      :type size: int
      :return: A new projection matrix.
      :rtype: :class:`Matrix`


   .. classmethod:: Rotation(angle, size, axis)
   
      Create a matrix representing a rotation.
   
      :arg angle: The angle of rotation desired, in radians.
      :type angle: float
      :arg size: The size of the rotation matrix to construct [2, 4].
      :type size: int
      :arg axis: a string in ['X', 'Y', 'Z'] or a 3D Vector Object
         (optional when size is 2).
      :type axis: string or :class:`Vector`
      :return: A new rotation matrix.
      :rtype: :class:`Matrix`


   .. classmethod:: Scale(factor, size, axis)
   
      Create a matrix representing a scaling.
   
      :arg factor: The factor of scaling to apply.
      :type factor: float
      :arg size: The size of the scale matrix to construct [2, 4].
      :type size: int
      :arg axis: Direction to influence scale. (optional).
      :type axis: :class:`Vector`
      :return: A new scale matrix.
      :rtype: :class:`Matrix`


   .. classmethod:: Shear(plane, size, factor)
   
      Create a matrix to represent an shear transformation.
   
      :arg plane: Can be any of the following: ['X', 'Y', 'XY', 'XZ', 'YZ'],
         where a single axis is for a 2D matrix only.
      :type plane: string
      :arg size: The size of the shear matrix to construct [2, 4].
      :type size: int
      :arg factor: The factor of shear to apply. For a 3 or 4 *size* matrix
         pass a pair of floats corresponding with the *plane* axis.
      :type factor: float or float pair
      :return: A new shear matrix.
      :rtype: :class:`Matrix`


   .. classmethod:: Translation(vector)
   
      Create a matrix representing a translation.
   
      :arg vector: The translation vector.
      :type vector: :class:`Vector`
      :return: An identity matrix with a translation.
      :rtype: :class:`Matrix`


   .. method:: adjugate()
   
      Set the matrix to its adjugate.
   
      .. note:: When the matrix cannot be adjugated a :exc:`ValueError` exception is raised.
   
      .. seealso:: `Adjugate matrix <https://en.wikipedia.org/wiki/Adjugate_matrix>` on Wikipedia.


   .. method:: adjugated()
   
      Return an adjugated copy of the matrix.
   
      :return: the adjugated matrix.
      :rtype: :class:`Matrix`
   
      .. note:: When the matrix cant be adjugated a :exc:`ValueError` exception is raised.


   .. method:: copy()
   
      Returns a copy of this matrix.
   
      :return: an instance of itself
      :rtype: :class:`Matrix`


   .. method:: decompose()
   
      Return the translation, rotation and scale components of this matrix.
   
      :return: trans, rot, scale triple.
      :rtype: (:class:`Vector`, :class:`Quaternion`, :class:`Vector`)


   .. method:: determinant()
   
      Return the determinant of a matrix.
   
      :return: Return the determinant of a matrix.
      :rtype: float
   
      .. seealso:: `Determinant <https://en.wikipedia.org/wiki/Determinant>` on Wikipedia.


   .. function:: freeze()
   
      Make this object immutable.
   
      After this the object can be hashed, used in dictionaries & sets.
   
      :return: An instance of this object.


   .. method:: identity()
   
      Set the matrix to the identity matrix.
   
      .. note:: An object with a location and rotation of zero, and a scale of one
         will have an identity matrix.
   
      .. seealso:: `Identity matrix <https://en.wikipedia.org/wiki/Identity_matrix>` on Wikipedia.


   .. method:: invert(fallback=None)
   
      Set the matrix to its inverse.
   
      :arg fallback: Set the matrix to this value when the inverse cannot be calculated
         (instead of raising a :exc:`ValueError` exception).
      :type fallback: :class:`Matrix`
   
      .. seealso:: `Inverse matrix <https://en.wikipedia.org/wiki/Inverse_matrix>` on Wikipedia.


   .. method:: invert_safe()
   
      Set the matrix to its inverse, will never error.
      If degenerated (e.g. zero scale on an axis), add some epsilon to its diagonal, to get an invertible one.
      If tweaked matrix is still degenerated, set to the identity matrix instead.
   
      .. seealso:: `Inverse Matrix <https://en.wikipedia.org/wiki/Inverse_matrix>` on Wikipedia.


   .. method:: inverted(fallback=None)
   
      Return an inverted copy of the matrix.
   
      :arg fallback: return this when the inverse can't be calculated
         (instead of raising a :exc:`ValueError`).
      :type fallback: any
      :return: the inverted matrix or fallback when given.
      :rtype: :class:`Matrix`


   .. method:: inverted_safe()
   
      Return an inverted copy of the matrix, will never error.
      If degenerated (e.g. zero scale on an axis), add some epsilon to its diagonal, to get an invertible one.
      If tweaked matrix is still degenerated, return the identity matrix instead.
   
      :return: the inverted matrix.
      :rtype: :class:`Matrix`


   .. function:: lerp(other, factor)
   
      Returns the interpolation of two matrices.
   
      :arg other: value to interpolate with.
      :type other: :class:`Matrix`
      :arg factor: The interpolation value in [0.0, 1.0].
      :type factor: float
      :return: The interpolated matrix.
      :rtype: :class:`Matrix`


   .. method:: normalize()
   
      Normalize each of the matrix columns.


   .. method:: normalized()
   
      Return a column normalized matrix
   
      :return: a column normalized matrix
      :rtype: :class:`Matrix`


   .. method:: resize_4x4()
   
      Resize the matrix to 4x4.


   .. method:: rotate(other)
   
      Rotates the matrix by another mathutils value.
   
      :arg other: rotation component of mathutils value
      :type other: :class:`Euler`, :class:`Quaternion` or :class:`Matrix`
   
      .. note:: If any of the columns are not unit length this may not have desired results.


   .. method:: to_3x3()
   
      Return a 3x3 copy of this matrix.
   
      :return: a new matrix.
      :rtype: :class:`Matrix`


   .. method:: to_4x4()
   
      Return a 4x4 copy of this matrix.
   
      :return: a new matrix.
      :rtype: :class:`Matrix`


   .. method:: to_euler(order, euler_compat)
   
      Return an Euler representation of the rotation matrix
      (3x3 or 4x4 matrix only).
   
      :arg order: Optional rotation order argument in
         ['XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX'].
      :type order: string
      :arg euler_compat: Optional euler argument the new euler will be made
         compatible with (no axis flipping between them).
         Useful for converting a series of matrices to animation curves.
      :type euler_compat: :class:`Euler`
      :return: Euler representation of the matrix.
      :rtype: :class:`Euler`


   .. method:: to_quaternion()
   
      Return a quaternion representation of the rotation matrix.
   
      :return: Quaternion representation of the rotation matrix.
      :rtype: :class:`Quaternion`


   .. method:: to_scale()
   
      Return the scale part of a 3x3 or 4x4 matrix.
   
      :return: Return the scale of a matrix.
      :rtype: :class:`Vector`
   
      .. note:: This method does not return a negative scale on any axis because it is not possible to obtain this data from the matrix alone.


   .. method:: to_translation()
   
      Return the translation part of a 4 row matrix.
   
      :return: Return the translation of a matrix.
      :rtype: :class:`Vector`


   .. method:: transpose()
   
      Set the matrix to its transpose.
   
      .. seealso:: `Transpose <https://en.wikipedia.org/wiki/Transpose>` on Wikipedia.


   .. method:: transposed()
   
      Return a new, transposed matrix.
   
      :return: a transposed matrix
      :rtype: :class:`Matrix`


   .. method:: zero()
   
      Set all the matrix values to zero.
   
      :rtype: :class:`Matrix`


   .. attribute:: col

      Access the matix by colums, 3x3 and 4x4 only, (read-only).
      
      :type: Matrix Access


   .. attribute:: is_frozen

      True when this object has been frozen (read-only).
      
      :type: boolean


   .. attribute:: is_negative

      True if this matrix results in a negative scale, 3x3 and 4x4 only, (read-only).
      
      :type: bool


   .. attribute:: is_orthogonal

      True if this matrix is orthogonal, 3x3 and 4x4 only, (read-only).
      
      :type: bool


   .. attribute:: is_orthogonal_axis_vectors

      True if this matrix has got orthogonal axis vectors, 3x3 and 4x4 only, (read-only).
      
      :type: bool


   .. attribute:: is_wrapped

      True when this object wraps external data (read-only).
      
      :type: boolean


   .. attribute:: median_scale

      The average scale applied to each axis (read-only).
      
      :type: float


   .. attribute:: owner

      The item this is wrapping or None  (read-only).


   .. attribute:: row

      Access the matix by rows (default), (read-only).
      
      :type: Matrix Access


   .. attribute:: translation

      The translation component of the matrix.
      
      :type: Vector

Quaternion
----------

.. class:: Quaternion([seq, [angle]])

   This object gives access to Quaternions in Blender.

   :param seq: size 3 or 4
   :type seq: :class:`Vector`
   :param angle: rotation angle, in radians
   :type angle: float

   The constructor takes arguments in various forms:

   (), *no args*
       Create an identity quaternion
   (*wxyz*)
       Create a quaternion from a ``(w, x, y, z)`` vector.
   (*exponential_map*)
       Create a quaternion from a 3d exponential map vector.

       .. seealso:: :meth:`to_exponential_map`
   (*axis, angle*)
       Create a quaternion representing a rotation of *angle* radians over *axis*.

       .. seealso:: :meth:`to_axis_angle`



   .. literalinclude:: __/examples/mathutils.Quaternion.py

   .. function:: conjugate()
   
      Set the quaternion to its conjugate (negate x, y, z).


   .. function:: conjugated()
   
      Return a new conjugated quaternion.
   
      :return: a new quaternion.
      :rtype: :class:`Quaternion`


   .. function:: copy()
   
      Returns a copy of this quaternion.
   
      :return: A copy of the quaternion.
      :rtype: :class:`Quaternion`
   
      .. note:: use this to get a copy of a wrapped quaternion with
         no reference to the original data.


   .. method:: cross(other)
   
      Return the cross product of this quaternion and another.
   
      :arg other: The other quaternion to perform the cross product with.
      :type other: :class:`Quaternion`
      :return: The cross product.
      :rtype: :class:`Quaternion`


   .. method:: dot(other)
   
      Return the dot product of this quaternion and another.
   
      :arg other: The other quaternion to perform the dot product with.
      :type other: :class:`Quaternion`
      :return: The dot product.
      :rtype: :class:`Quaternion`


   .. function:: freeze()
   
      Make this object immutable.
   
      After this the object can be hashed, used in dictionaries & sets.
   
      :return: An instance of this object.


   .. function:: identity()
   
      Set the quaternion to an identity quaternion.
   
      :rtype: :class:`Quaternion`


   .. function:: invert()
   
      Set the quaternion to its inverse.


   .. function:: inverted()
   
      Return a new, inverted quaternion.
   
      :return: the inverted value.
      :rtype: :class:`Quaternion`


   .. function:: negate()
   
      Set the quaternion to its negative.
   
      :rtype: :class:`Quaternion`


   .. function:: normalize()
   
      Normalize the quaternion.


   .. function:: normalized()
   
      Return a new normalized quaternion.
   
      :return: a normalized copy.
      :rtype: :class:`Quaternion`


   .. method:: rotate(other)
   
      Rotates the quaternion by another mathutils value.
   
      :arg other: rotation component of mathutils value
      :type other: :class:`Euler`, :class:`Quaternion` or :class:`Matrix`


   .. function:: rotation_difference(other)
   
      Returns a quaternion representing the rotational difference.
   
      :arg other: second quaternion.
      :type other: :class:`Quaternion`
      :return: the rotational difference between the two quat rotations.
      :rtype: :class:`Quaternion`


   .. function:: slerp(other, factor)
   
      Returns the interpolation of two quaternions.
   
      :arg other: value to interpolate with.
      :type other: :class:`Quaternion`
      :arg factor: The interpolation value in [0.0, 1.0].
      :type factor: float
      :return: The interpolated rotation.
      :rtype: :class:`Quaternion`


   .. method:: to_axis_angle()
   
      Return the axis, angle representation of the quaternion.
   
      :return: axis, angle.
      :rtype: (:class:`Vector`, float) pair


   .. method:: to_euler(order, euler_compat)
   
      Return Euler representation of the quaternion.
   
      :arg order: Optional rotation order argument in
         ['XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX'].
      :type order: string
      :arg euler_compat: Optional euler argument the new euler will be made
         compatible with (no axis flipping between them).
         Useful for converting a series of matrices to animation curves.
      :type euler_compat: :class:`Euler`
      :return: Euler representation of the quaternion.
      :rtype: :class:`Euler`


   .. method:: to_exponential_map()
   
      Return the exponential map representation of the quaternion.
   
      This representation consist of the rotation axis multiplied by the rotation angle.   Such a representation is useful for interpolation between multiple orientations.
   
      :return: exponential map.
      :rtype: :class:`Vector` of size 3
   
      To convert back to a quaternion, pass it to the :class:`Quaternion` constructor.


   .. method:: to_matrix()
   
      Return a matrix representation of the quaternion.
   
      :return: A 3x3 rotation matrix representation of the quaternion.
      :rtype: :class:`Matrix`


   .. attribute:: angle

      Angle of the quaternion.
      
      :type: float


   .. attribute:: axis

      Quaternion axis as a vector.
      
      :type: :class:`Vector`


   .. attribute:: is_frozen

      True when this object has been frozen (read-only).
      
      :type: boolean


   .. attribute:: is_wrapped

      True when this object wraps external data (read-only).
      
      :type: boolean


   .. attribute:: magnitude

      Size of the quaternion (read-only).
      
      :type: float


   .. attribute:: owner

      The item this is wrapping or None  (read-only).


   .. attribute:: w

      Quaternion axis value.
      
      :type: float


   .. attribute:: x

      Quaternion axis value.
      
      :type: float


   .. attribute:: y

      Quaternion axis value.
      
      :type: float


   .. attribute:: z

      Quaternion axis value.
      
      :type: float

Vector
------

.. class:: Vector(seq)

   This object gives access to Vectors in Blender.

   :param seq: Components of the vector, must be a sequence of at least two
   :type seq: sequence of numbers



   .. literalinclude:: __/examples/mathutils.Vector.py

   .. classmethod:: Fill(size, fill=0.0)
   
      Create a vector of length size with all values set to fill.
   
      :arg size: The length of the vector to be created.
      :type size: int
      :arg fill: The value used to fill the vector.
      :type fill: float


   .. classmethod:: Linspace(start, stop, size)
   
      Create a vector of the specified size which is filled with linearly spaced values between start and stop values.
   
      :arg start: The start of the range used to fill the vector.
      :type start: int
      :arg stop: The end of the range used to fill the vector.
      :type stop: int
      :arg size: The size of the vector to be created.
      :type size: int


   .. classmethod:: Range(start=0, stop, step=1)
   
      Create a filled with a range of values.
   
      :arg start: The start of the range used to fill the vector.
      :type start: int
      :arg stop: The end of the range used to fill the vector.
      :type stop: int
      :arg step: The step between successive values in the vector.
      :type step: int


   .. classmethod:: Repeat(vector, size)
   
      Create a vector by repeating the values in vector until the required size is reached.
   
      :arg tuple: The vector to draw values from.
      :type tuple: :class:`mathutils.Vector`
      :arg size: The size of the vector to be created.
      :type size: int


   .. function:: angle(other, fallback=None)
   
      Return the angle between two vectors.
   
      :arg other: another vector to compare the angle with
      :type other: :class:`Vector`
      :arg fallback: return this when the angle can't be calculated (zero length vector),
         (instead of raising a :exc:`ValueError`).
      :type fallback: any
      :return: angle in radians or fallback when given
      :rtype: float


   .. function:: angle_signed(other, fallback)
   
      Return the signed angle between two 2D vectors (clockwise is positive).
   
      :arg other: another vector to compare the angle with
      :type other: :class:`Vector`
      :arg fallback: return this when the angle can't be calculated (zero length vector),
         (instead of raising a :exc:`ValueError`).
      :type fallback: any
      :return: angle in radians or fallback when given
      :rtype: float


   .. function:: copy()
   
      Returns a copy of this vector.
   
      :return: A copy of the vector.
      :rtype: :class:`Vector`
   
      .. note:: use this to get a copy of a wrapped vector with
         no reference to the original data.


   .. method:: cross(other)
   
      Return the cross product of this vector and another.
   
      :arg other: The other vector to perform the cross product with.
      :type other: :class:`Vector`
      :return: The cross product.
      :rtype: :class:`Vector` or float when 2D vectors are used
   
      .. note:: both vectors must be 2D or 3D


   .. method:: dot(other)
   
      Return the dot product of this vector and another.
   
      :arg other: The other vector to perform the dot product with.
      :type other: :class:`Vector`
      :return: The dot product.
      :rtype: :class:`Vector`


   .. function:: freeze()
   
      Make this object immutable.
   
      After this the object can be hashed, used in dictionaries & sets.
   
      :return: An instance of this object.


   .. function:: lerp(other, factor)
   
      Returns the interpolation of two vectors.
   
      :arg other: value to interpolate with.
      :type other: :class:`Vector`
      :arg factor: The interpolation value in [0.0, 1.0].
      :type factor: float
      :return: The interpolated vector.
      :rtype: :class:`Vector`


   .. method:: negate()
   
      Set all values to their negative.


   .. method:: normalize()
   
      Normalize the vector, making the length of the vector always 1.0.
   
      .. warning:: Normalizing a vector where all values are zero has no effect.
   
      .. note:: Normalize works for vectors of all sizes,
         however 4D Vectors w axis is left untouched.


   .. method:: normalized()
   
      Return a new, normalized vector.
   
      :return: a normalized copy of the vector
      :rtype: :class:`Vector`


   .. method:: orthogonal()
   
      Return a perpendicular vector.
   
      :return: a new vector 90 degrees from this vector.
      :rtype: :class:`Vector`
   
      .. note:: the axis is undefined, only use when any orthogonal vector is acceptable.


   .. function:: project(other)
   
      Return the projection of this vector onto the *other*.
   
      :arg other: second vector.
      :type other: :class:`Vector`
      :return: the parallel projection vector
      :rtype: :class:`Vector`


   .. method:: reflect(mirror)
   
      Return the reflection vector from the *mirror* argument.
   
      :arg mirror: This vector could be a normal from the reflecting surface.
      :type mirror: :class:`Vector`
      :return: The reflected vector matching the size of this vector.
      :rtype: :class:`Vector`


   .. method:: resize(size=3)
   
      Resize the vector to have size number of elements.


   .. method:: resize_2d()
   
      Resize the vector to 2D  (x, y).


   .. method:: resize_3d()
   
      Resize the vector to 3D  (x, y, z).


   .. method:: resize_4d()
   
      Resize the vector to 4D (x, y, z, w).


   .. method:: resized(size=3)
   
      Return a resized copy of the vector with size number of elements.
   
      :return: a new vector
      :rtype: :class:`Vector`


   .. function:: rotate(other)
   
      Rotate the vector by a rotation value.
   
      :arg other: rotation component of mathutils value
      :type other: :class:`Euler`, :class:`Quaternion` or :class:`Matrix`


   .. function:: rotation_difference(other)
   
      Returns a quaternion representing the rotational difference between this
      vector and another.
   
      :arg other: second vector.
      :type other: :class:`Vector`
      :return: the rotational difference between the two vectors.
      :rtype: :class:`Quaternion`
   
      .. note:: 2D vectors raise an :exc:`AttributeError`.


   .. function:: slerp(other, factor, fallback=None)
   
      Returns the interpolation of two non-zero vectors (spherical coordinates).
   
      :arg other: value to interpolate with.
      :type other: :class:`Vector`
      :arg factor: The interpolation value typically in [0.0, 1.0].
      :type factor: float
      :arg fallback: return this when the vector can't be calculated (zero length vector or direct opposites),
         (instead of raising a :exc:`ValueError`).
      :type fallback: any
      :return: The interpolated vector.
      :rtype: :class:`Vector`


   .. method:: to_2d()
   
      Return a 2d copy of the vector.
   
      :return: a new vector
      :rtype: :class:`Vector`


   .. method:: to_3d()
   
      Return a 3d copy of the vector.
   
      :return: a new vector
      :rtype: :class:`Vector`


   .. method:: to_4d()
   
      Return a 4d copy of the vector.
   
      :return: a new vector
      :rtype: :class:`Vector`


   .. method:: to_track_quat(track, up)
   
      Return a quaternion rotation from the vector and the track and up axis.
   
      :arg track: Track axis in ['X', 'Y', 'Z', '-X', '-Y', '-Z'].
      :type track: string
      :arg up: Up axis in ['X', 'Y', 'Z'].
      :type up: string
      :return: rotation from the vector and the track and up axis.
      :rtype: :class:`Quaternion`


   .. method:: to_tuple(precision=-1)
   
      Return this vector as a tuple with.
   
      :arg precision: The number to round the value to in [-1, 21].
      :type precision: int
      :return: the values of the vector rounded by *precision*
      :rtype: tuple


   .. method:: zero()
   
      Set all values to zero.


   .. attribute:: is_frozen

      True when this object has been frozen (read-only).
      
      :type: boolean


   .. attribute:: is_wrapped

      True when this object wraps external data (read-only).
      
      :type: boolean


   .. attribute:: length

      Vector Length.
      
      :type: float


   .. attribute:: length_squared

      Vector length squared (v.dot(v)).
      
      :type: float


   .. attribute:: magnitude

      Vector Length.
      
      :type: float


   .. attribute:: owner

      The item this is wrapping or None  (read-only).


   .. attribute:: w

      Vector W axis (4D Vectors only).
      
      :type: float


   .. attribute:: ww

      Undocumented


   .. attribute:: www

      Undocumented


   .. attribute:: wwww

      Undocumented


   .. attribute:: wwwx

      Undocumented


   .. attribute:: wwwy

      Undocumented


   .. attribute:: wwwz

      Undocumented


   .. attribute:: wwx

      Undocumented


   .. attribute:: wwxw

      Undocumented


   .. attribute:: wwxx

      Undocumented


   .. attribute:: wwxy

      Undocumented


   .. attribute:: wwxz

      Undocumented


   .. attribute:: wwy

      Undocumented


   .. attribute:: wwyw

      Undocumented


   .. attribute:: wwyx

      Undocumented


   .. attribute:: wwyy

      Undocumented


   .. attribute:: wwyz

      Undocumented


   .. attribute:: wwz

      Undocumented


   .. attribute:: wwzw

      Undocumented


   .. attribute:: wwzx

      Undocumented


   .. attribute:: wwzy

      Undocumented


   .. attribute:: wwzz

      Undocumented


   .. attribute:: wx

      Undocumented


   .. attribute:: wxw

      Undocumented


   .. attribute:: wxww

      Undocumented


   .. attribute:: wxwx

      Undocumented


   .. attribute:: wxwy

      Undocumented


   .. attribute:: wxwz

      Undocumented


   .. attribute:: wxx

      Undocumented


   .. attribute:: wxxw

      Undocumented


   .. attribute:: wxxx

      Undocumented


   .. attribute:: wxxy

      Undocumented


   .. attribute:: wxxz

      Undocumented


   .. attribute:: wxy

      Undocumented


   .. attribute:: wxyw

      Undocumented


   .. attribute:: wxyx

      Undocumented


   .. attribute:: wxyy

      Undocumented


   .. attribute:: wxyz

      Undocumented


   .. attribute:: wxz

      Undocumented


   .. attribute:: wxzw

      Undocumented


   .. attribute:: wxzx

      Undocumented


   .. attribute:: wxzy

      Undocumented


   .. attribute:: wxzz

      Undocumented


   .. attribute:: wy

      Undocumented


   .. attribute:: wyw

      Undocumented


   .. attribute:: wyww

      Undocumented


   .. attribute:: wywx

      Undocumented


   .. attribute:: wywy

      Undocumented


   .. attribute:: wywz

      Undocumented


   .. attribute:: wyx

      Undocumented


   .. attribute:: wyxw

      Undocumented


   .. attribute:: wyxx

      Undocumented


   .. attribute:: wyxy

      Undocumented


   .. attribute:: wyxz

      Undocumented


   .. attribute:: wyy

      Undocumented


   .. attribute:: wyyw

      Undocumented


   .. attribute:: wyyx

      Undocumented


   .. attribute:: wyyy

      Undocumented


   .. attribute:: wyyz

      Undocumented


   .. attribute:: wyz

      Undocumented


   .. attribute:: wyzw

      Undocumented


   .. attribute:: wyzx

      Undocumented


   .. attribute:: wyzy

      Undocumented


   .. attribute:: wyzz

      Undocumented


   .. attribute:: wz

      Undocumented


   .. attribute:: wzw

      Undocumented


   .. attribute:: wzww

      Undocumented


   .. attribute:: wzwx

      Undocumented


   .. attribute:: wzwy

      Undocumented


   .. attribute:: wzwz

      Undocumented


   .. attribute:: wzx

      Undocumented


   .. attribute:: wzxw

      Undocumented


   .. attribute:: wzxx

      Undocumented


   .. attribute:: wzxy

      Undocumented


   .. attribute:: wzxz

      Undocumented


   .. attribute:: wzy

      Undocumented


   .. attribute:: wzyw

      Undocumented


   .. attribute:: wzyx

      Undocumented


   .. attribute:: wzyy

      Undocumented


   .. attribute:: wzyz

      Undocumented


   .. attribute:: wzz

      Undocumented


   .. attribute:: wzzw

      Undocumented


   .. attribute:: wzzx

      Undocumented


   .. attribute:: wzzy

      Undocumented


   .. attribute:: wzzz

      Undocumented


   .. attribute:: x

      Vector X axis.
      
      :type: float


   .. attribute:: xw

      Undocumented


   .. attribute:: xww

      Undocumented


   .. attribute:: xwww

      Undocumented


   .. attribute:: xwwx

      Undocumented


   .. attribute:: xwwy

      Undocumented


   .. attribute:: xwwz

      Undocumented


   .. attribute:: xwx

      Undocumented


   .. attribute:: xwxw

      Undocumented


   .. attribute:: xwxx

      Undocumented


   .. attribute:: xwxy

      Undocumented


   .. attribute:: xwxz

      Undocumented


   .. attribute:: xwy

      Undocumented


   .. attribute:: xwyw

      Undocumented


   .. attribute:: xwyx

      Undocumented


   .. attribute:: xwyy

      Undocumented


   .. attribute:: xwyz

      Undocumented


   .. attribute:: xwz

      Undocumented


   .. attribute:: xwzw

      Undocumented


   .. attribute:: xwzx

      Undocumented


   .. attribute:: xwzy

      Undocumented


   .. attribute:: xwzz

      Undocumented


   .. attribute:: xx

      Undocumented


   .. attribute:: xxw

      Undocumented


   .. attribute:: xxww

      Undocumented


   .. attribute:: xxwx

      Undocumented


   .. attribute:: xxwy

      Undocumented


   .. attribute:: xxwz

      Undocumented


   .. attribute:: xxx

      Undocumented


   .. attribute:: xxxw

      Undocumented


   .. attribute:: xxxx

      Undocumented


   .. attribute:: xxxy

      Undocumented


   .. attribute:: xxxz

      Undocumented


   .. attribute:: xxy

      Undocumented


   .. attribute:: xxyw

      Undocumented


   .. attribute:: xxyx

      Undocumented


   .. attribute:: xxyy

      Undocumented


   .. attribute:: xxyz

      Undocumented


   .. attribute:: xxz

      Undocumented


   .. attribute:: xxzw

      Undocumented


   .. attribute:: xxzx

      Undocumented


   .. attribute:: xxzy

      Undocumented


   .. attribute:: xxzz

      Undocumented


   .. attribute:: xy

      Undocumented


   .. attribute:: xyw

      Undocumented


   .. attribute:: xyww

      Undocumented


   .. attribute:: xywx

      Undocumented


   .. attribute:: xywy

      Undocumented


   .. attribute:: xywz

      Undocumented


   .. attribute:: xyx

      Undocumented


   .. attribute:: xyxw

      Undocumented


   .. attribute:: xyxx

      Undocumented


   .. attribute:: xyxy

      Undocumented


   .. attribute:: xyxz

      Undocumented


   .. attribute:: xyy

      Undocumented


   .. attribute:: xyyw

      Undocumented


   .. attribute:: xyyx

      Undocumented


   .. attribute:: xyyy

      Undocumented


   .. attribute:: xyyz

      Undocumented


   .. attribute:: xyz

      Undocumented


   .. attribute:: xyzw

      Undocumented


   .. attribute:: xyzx

      Undocumented


   .. attribute:: xyzy

      Undocumented


   .. attribute:: xyzz

      Undocumented


   .. attribute:: xz

      Undocumented


   .. attribute:: xzw

      Undocumented


   .. attribute:: xzww

      Undocumented


   .. attribute:: xzwx

      Undocumented


   .. attribute:: xzwy

      Undocumented


   .. attribute:: xzwz

      Undocumented


   .. attribute:: xzx

      Undocumented


   .. attribute:: xzxw

      Undocumented


   .. attribute:: xzxx

      Undocumented


   .. attribute:: xzxy

      Undocumented


   .. attribute:: xzxz

      Undocumented


   .. attribute:: xzy

      Undocumented


   .. attribute:: xzyw

      Undocumented


   .. attribute:: xzyx

      Undocumented


   .. attribute:: xzyy

      Undocumented


   .. attribute:: xzyz

      Undocumented


   .. attribute:: xzz

      Undocumented


   .. attribute:: xzzw

      Undocumented


   .. attribute:: xzzx

      Undocumented


   .. attribute:: xzzy

      Undocumented


   .. attribute:: xzzz

      Undocumented


   .. attribute:: y

      Vector Y axis.
      
      :type: float


   .. attribute:: yw

      Undocumented


   .. attribute:: yww

      Undocumented


   .. attribute:: ywww

      Undocumented


   .. attribute:: ywwx

      Undocumented


   .. attribute:: ywwy

      Undocumented


   .. attribute:: ywwz

      Undocumented


   .. attribute:: ywx

      Undocumented


   .. attribute:: ywxw

      Undocumented


   .. attribute:: ywxx

      Undocumented


   .. attribute:: ywxy

      Undocumented


   .. attribute:: ywxz

      Undocumented


   .. attribute:: ywy

      Undocumented


   .. attribute:: ywyw

      Undocumented


   .. attribute:: ywyx

      Undocumented


   .. attribute:: ywyy

      Undocumented


   .. attribute:: ywyz

      Undocumented


   .. attribute:: ywz

      Undocumented


   .. attribute:: ywzw

      Undocumented


   .. attribute:: ywzx

      Undocumented


   .. attribute:: ywzy

      Undocumented


   .. attribute:: ywzz

      Undocumented


   .. attribute:: yx

      Undocumented


   .. attribute:: yxw

      Undocumented


   .. attribute:: yxww

      Undocumented


   .. attribute:: yxwx

      Undocumented


   .. attribute:: yxwy

      Undocumented


   .. attribute:: yxwz

      Undocumented


   .. attribute:: yxx

      Undocumented


   .. attribute:: yxxw

      Undocumented


   .. attribute:: yxxx

      Undocumented


   .. attribute:: yxxy

      Undocumented


   .. attribute:: yxxz

      Undocumented


   .. attribute:: yxy

      Undocumented


   .. attribute:: yxyw

      Undocumented


   .. attribute:: yxyx

      Undocumented


   .. attribute:: yxyy

      Undocumented


   .. attribute:: yxyz

      Undocumented


   .. attribute:: yxz

      Undocumented


   .. attribute:: yxzw

      Undocumented


   .. attribute:: yxzx

      Undocumented


   .. attribute:: yxzy

      Undocumented


   .. attribute:: yxzz

      Undocumented


   .. attribute:: yy

      Undocumented


   .. attribute:: yyw

      Undocumented


   .. attribute:: yyww

      Undocumented


   .. attribute:: yywx

      Undocumented


   .. attribute:: yywy

      Undocumented


   .. attribute:: yywz

      Undocumented


   .. attribute:: yyx

      Undocumented


   .. attribute:: yyxw

      Undocumented


   .. attribute:: yyxx

      Undocumented


   .. attribute:: yyxy

      Undocumented


   .. attribute:: yyxz

      Undocumented


   .. attribute:: yyy

      Undocumented


   .. attribute:: yyyw

      Undocumented


   .. attribute:: yyyx

      Undocumented


   .. attribute:: yyyy

      Undocumented


   .. attribute:: yyyz

      Undocumented


   .. attribute:: yyz

      Undocumented


   .. attribute:: yyzw

      Undocumented


   .. attribute:: yyzx

      Undocumented


   .. attribute:: yyzy

      Undocumented


   .. attribute:: yyzz

      Undocumented


   .. attribute:: yz

      Undocumented


   .. attribute:: yzw

      Undocumented


   .. attribute:: yzww

      Undocumented


   .. attribute:: yzwx

      Undocumented


   .. attribute:: yzwy

      Undocumented


   .. attribute:: yzwz

      Undocumented


   .. attribute:: yzx

      Undocumented


   .. attribute:: yzxw

      Undocumented


   .. attribute:: yzxx

      Undocumented


   .. attribute:: yzxy

      Undocumented


   .. attribute:: yzxz

      Undocumented


   .. attribute:: yzy

      Undocumented


   .. attribute:: yzyw

      Undocumented


   .. attribute:: yzyx

      Undocumented


   .. attribute:: yzyy

      Undocumented


   .. attribute:: yzyz

      Undocumented


   .. attribute:: yzz

      Undocumented


   .. attribute:: yzzw

      Undocumented


   .. attribute:: yzzx

      Undocumented


   .. attribute:: yzzy

      Undocumented


   .. attribute:: yzzz

      Undocumented


   .. attribute:: z

      Vector Z axis (3D Vectors only).
      
      :type: float


   .. attribute:: zw

      Undocumented


   .. attribute:: zww

      Undocumented


   .. attribute:: zwww

      Undocumented


   .. attribute:: zwwx

      Undocumented


   .. attribute:: zwwy

      Undocumented


   .. attribute:: zwwz

      Undocumented


   .. attribute:: zwx

      Undocumented


   .. attribute:: zwxw

      Undocumented


   .. attribute:: zwxx

      Undocumented


   .. attribute:: zwxy

      Undocumented


   .. attribute:: zwxz

      Undocumented


   .. attribute:: zwy

      Undocumented


   .. attribute:: zwyw

      Undocumented


   .. attribute:: zwyx

      Undocumented


   .. attribute:: zwyy

      Undocumented


   .. attribute:: zwyz

      Undocumented


   .. attribute:: zwz

      Undocumented


   .. attribute:: zwzw

      Undocumented


   .. attribute:: zwzx

      Undocumented


   .. attribute:: zwzy

      Undocumented


   .. attribute:: zwzz

      Undocumented


   .. attribute:: zx

      Undocumented


   .. attribute:: zxw

      Undocumented


   .. attribute:: zxww

      Undocumented


   .. attribute:: zxwx

      Undocumented


   .. attribute:: zxwy

      Undocumented


   .. attribute:: zxwz

      Undocumented


   .. attribute:: zxx

      Undocumented


   .. attribute:: zxxw

      Undocumented


   .. attribute:: zxxx

      Undocumented


   .. attribute:: zxxy

      Undocumented


   .. attribute:: zxxz

      Undocumented


   .. attribute:: zxy

      Undocumented


   .. attribute:: zxyw

      Undocumented


   .. attribute:: zxyx

      Undocumented


   .. attribute:: zxyy

      Undocumented


   .. attribute:: zxyz

      Undocumented


   .. attribute:: zxz

      Undocumented


   .. attribute:: zxzw

      Undocumented


   .. attribute:: zxzx

      Undocumented


   .. attribute:: zxzy

      Undocumented


   .. attribute:: zxzz

      Undocumented


   .. attribute:: zy

      Undocumented


   .. attribute:: zyw

      Undocumented


   .. attribute:: zyww

      Undocumented


   .. attribute:: zywx

      Undocumented


   .. attribute:: zywy

      Undocumented


   .. attribute:: zywz

      Undocumented


   .. attribute:: zyx

      Undocumented


   .. attribute:: zyxw

      Undocumented


   .. attribute:: zyxx

      Undocumented


   .. attribute:: zyxy

      Undocumented


   .. attribute:: zyxz

      Undocumented


   .. attribute:: zyy

      Undocumented


   .. attribute:: zyyw

      Undocumented


   .. attribute:: zyyx

      Undocumented


   .. attribute:: zyyy

      Undocumented


   .. attribute:: zyyz

      Undocumented


   .. attribute:: zyz

      Undocumented


   .. attribute:: zyzw

      Undocumented


   .. attribute:: zyzx

      Undocumented


   .. attribute:: zyzy

      Undocumented


   .. attribute:: zyzz

      Undocumented


   .. attribute:: zz

      Undocumented


   .. attribute:: zzw

      Undocumented


   .. attribute:: zzww

      Undocumented


   .. attribute:: zzwx

      Undocumented


   .. attribute:: zzwy

      Undocumented


   .. attribute:: zzwz

      Undocumented


   .. attribute:: zzx

      Undocumented


   .. attribute:: zzxw

      Undocumented


   .. attribute:: zzxx

      Undocumented


   .. attribute:: zzxy

      Undocumented


   .. attribute:: zzxz

      Undocumented


   .. attribute:: zzy

      Undocumented


   .. attribute:: zzyw

      Undocumented


   .. attribute:: zzyx

      Undocumented


   .. attribute:: zzyy

      Undocumented


   .. attribute:: zzyz

      Undocumented


   .. attribute:: zzz

      Undocumented


   .. attribute:: zzzw

      Undocumented


   .. attribute:: zzzx

      Undocumented


   .. attribute:: zzzy

      Undocumented


   .. attribute:: zzzz

      Undocumented




