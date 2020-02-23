import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import { useDispatch } from 'react-redux'

import { useHistory } from 'react-router-dom'

import { addItem, updateItem, deleteItem } from 'redux/actions/Item'

function AddItem(props) {
  const d1 = new Date()
  const month = d1.getMonth() + 1
  const dateString = `${d1.getFullYear()}-${month.toString().padStart(2, '0')}-${d1.getDate()}`
  const dispatch = useDispatch()
  const history = useHistory()
  const [text, settext] = useState('')
  const [name, setname] = useState('')
  const [keywords, setkeywords] = useState('')
  const [date, setdate] = useState(dateString)

  const [oldId, setoldId] = useState('')

  useEffect(() => {
    if (props.item && props.item.id) {
      const {
        id: oldId = '',
        text: oldText = '',
        authorName: oldAuthorName = '',
        keywords: oldKeywords = '',
        createdDate = ''
      } = props.item
      settext(oldText)
      setname(oldAuthorName)
      setkeywords(oldKeywords)
      setoldId(oldId)
      setdate(createdDate)
    }
  }, [props.item])
  //
  const handleSubmit = event => {
    event.preventDefault()
    if (!text || !name || !keywords) {
      return
    }
    let currentDate = new Date()
    if (oldId) {
      dispatch(updateItem({ id: oldId, createdDate: date, text, authorName: name, keywords }))
    } else {
      let id = currentDate.getTime()
      dispatch(addItem({ id, createdDate: date, text, authorName: name, keywords }))
      history.push('/home')
    }
  }
  const handleDelete = () => {
    dispatch(deleteItem({ id: oldId }))
  }
  return (
    <div className="AddItem">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="textarea"
            rows="6"
            name="text"
            id="exampleText"
            value={text}
            onChange={e => settext(e.target.value)}
            placeholder="Speech content show here"
          />
        </FormGroup>
        <div className="AddItem_row">
          <FormGroup>
            <Input
              type="text"
              name="name"
              value={name}
              id="exampleEmail"
              onChange={e => setname(e.target.value)}
              placeholder="Auther"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="keywords"
              value={keywords}
              onChange={e => setkeywords(e.target.value)}
              id="keywords"
              placeholder="Speech keywords"
            />
          </FormGroup>
          <FormGroup>
            <Input type="date" name="date" value={date} onChange={e => setdate(e.target.value)} placeholder="Date" />
          </FormGroup>
        </div>
        <div className="footer_btn">
          <Button type="button" color="danger" onClick={handleDelete}>
            Delete
          </Button>

          <Button type="submit" disabled={!text || !name || !keywords}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AddItem
