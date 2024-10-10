// RichTextEditor.tsx
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

interface RichTextEditorProps {
  id: string
  name: string
  defaultValue?: string
}

export default function RichTextEditor({ id, name, defaultValue = '' }: RichTextEditorProps) {
  const [content, setContent] = useState(defaultValue)

  return (
    <div>
      <ReactQuill
        id={id}
        value={content}
        onChange={setContent}
        theme="snow"
        placeholder="Write something..."
        style={{ height: '200px' }}
      />
      <textarea
        name={name}
        value={content}
        readOnly
        hidden
      />
    </div>
  )
}
