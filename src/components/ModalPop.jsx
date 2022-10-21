import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/style.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import RichTextEditor from 'react-rte';
import { useState } from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalPop = (props) => {
  const { open, handleClose } = props;

  const [richTextValue, setRichTextValue] = useState(RichTextEditor.createEmptyValue())

  const onChange = React.useCallback((value) => {
    setRichTextValue(value)
  }, [])


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} height={500}>

          <h3>Email</h3>
          <ReactMultiEmail
            placeholder="To"
            // emails={emails}
            onChange={(_emails) => {
              this.setState({ emails: _emails });
            }}
            validateEmail={email => {
              return isEmail(email); // return boolean
            }}
            getLabel={(
              email,
              index,
              removeEmail
            ) => {
              return (
                <div data-tag key={index}>
                  {email}
                  <span data-tag-handle onClick={() => removeEmail(index)}>
                    ×
                  </span>
                </div>
              );
            }}
          />
          <br />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Subject"
            style={{ width: 690 }}
          />

          <br></br>

          <RichTextEditor
            placeholder='Compose Email'
            value={richTextValue}
            onChange={onChange}
          />
          <br></br>
          <button className='send-btn'>Send</button>

        </Box>
      </Modal>
    </div>
  );
}

export default ModalPop;
