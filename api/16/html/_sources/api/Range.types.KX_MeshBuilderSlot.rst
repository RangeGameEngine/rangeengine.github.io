KX_MeshBuilderSlot(KX_MeshBuilderSlot)
======================================

base class --- :class:`KX_MeshBuilderSlot`

.. class:: KX_MeshBuilderSlot(KX_MeshBuilderSlot)

   A mesh slot for :class:`KX_MeshBuilder`.

   .. attribute:: vertices

      Get the list of vertices (read-only).

      :type: list

   .. attribute:: indices

      Get the list of indices (read-only).

      :type: list

   .. attribute:: triangleIndices

      Get the list of triangleIndices (read-only).

      :type: list

   .. attribute:: material

      The Slot material.

      :type: :class:`KX_Material`

   .. attribute:: uvCount

      Get the count of UVs (read-only).

      :type: int

   .. attribute:: colorCount

      Get the count of Vertex Color (read-only).

      :type: int

   .. attribute:: primitive

      Get the list of primitives (read-only).

      :type: list

   .. method:: addVertex(position, normal=(0, 0, 0), tangent=(1, 1, 1, 1), uvs=((0, 0),), colors=(0, 0, 0, 0))

      Create a Vertex.

      :arg position: Vertex position.
      :type position: tuple (x, y, z)
      :arg normal: Vertex normal.
      :type normal: tuple (x, y, z)
      :arg tangent: Vertex tangent.
      :type tangent: tuple (x, y, z, w)
      :arg uvs: Vertex UVs. max 8 uvs.
      :type uvs: tuple ((x, y), (x, y), (x, y), (x, y), (x, y), (x, y), (x, y), (x, y))
      :arg colors: Vertex Colors. max 8 colors.
      :type colors: tuple ((x, y), (x, y), (x, y), (x, y), (x, y), (x, y), (x, y), (x, y))

   .. method:: addIndex(index)

      Add the order of vertex indices to create a triangle, this function adds the primitive and the triangle index.

      :arg index: A indices for render one triangle.
      :type index: tuple (x, y, z)

   .. method:: removeVertex(start, end=-1)

      Remove Vertices from the mesh.

      :arg start: Start indice for the vertex.
      :type start: int
      :arg end: End indice for the vertex.
      :type end: int

   .. method:: addPrimitiveIndex(index)

      Add the order of vertex indices to create a primitive triangle.

      :arg index: A indices for render one triangle.
      :type index: tuple (x, y, z)

   .. method:: removePrimitiveIndex(start, end=-1)

      Remove the Primitive Vertices from the mesh.

      :arg start: Start indice for the vertex.
      :type start: int
      :arg end: End indice for the vertex.
      :type end: int

   .. method:: addTriangleIndex(index)

      Add the order of vertex indices to create a triangle.

      :arg index: A indices for render one triangle.
      :type index: tuple (x, y, z)

   .. method:: removeTriangleIndex(start, end=-1)

      Remove the Triangles from the mesh.

      :arg start: Start indice for the vertex.
      :type start: int
      :arg end: End indice for the vertex.
      :type end: int

   .. method:: recalculateNormals()

      It recalculates the mesh norms, it is not necessary to use it if you have specified the vertex normal in addVertex().

      .. warning::
         This function can be impact the performance depending on the complexity of the model, use it only once after you have finished the mesh.
