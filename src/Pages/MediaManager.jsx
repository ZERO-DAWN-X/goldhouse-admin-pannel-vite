import React, { useState } from 'react';
import { Box, Button, Typography, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';

const Input = styled('input')({
  display: 'none',
});

const UploadButton = styled(Button)({
  marginTop: '16px',
  marginBottom: '32px',
  backgroundColor: '#1976d2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#115293',
  },
});

const MediaBox = styled(Box)({
  position: 'relative',
  borderRadius: '4px',
  overflow: 'hidden',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
});

const DeleteButton = styled(IconButton)({
  position: 'absolute',
  top: '8px',
  right: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
});

function MediaManager() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const handleImageUpload = (event) => {
    const file = URL.createObjectURL(event.target.files[0]);
    setImages((prevImages) => [...prevImages, file]);
  };

  const handleVideoUpload = (event) => {
    const file = URL.createObjectURL(event.target.files[0]);
    setVideos((prevVideos) => [...prevVideos, file]);
  };

  const handleDelete = (filePath, type) => {
    if (type === 'image') {
      setImages((prevImages) => prevImages.filter((image) => image !== filePath));
    } else {
      setVideos((prevVideos) => prevVideos.filter((video) => video !== filePath));
    }
    URL.revokeObjectURL(filePath);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Ads Management
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Upload Image</Typography>
        <label htmlFor="upload-image-button">
          <Input
            accept="image/*"
            id="upload-image-button"
            type="file"
            onChange={handleImageUpload}
          />
          <UploadButton
            variant="contained"
            component="span"
            startIcon={<UploadIcon />}
          >
            Upload Image
          </UploadButton>
        </label>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Upload Video</Typography>
        <label htmlFor="upload-video-button">
          <Input
            accept="video/*"
            id="upload-video-button"
            type="file"
            onChange={handleVideoUpload}
          />
          <UploadButton
            variant="contained"
            component="span"
            startIcon={<UploadIcon />}
          >
            Upload Video
          </UploadButton>
        </label>
      </Box>

      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Uploaded Images
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {images.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <MediaBox>
              <img src={image} alt={`Uploaded ${index}`} style={{ width: '100%' }} />
              <DeleteButton
                color="secondary"
                aria-label="delete"
                onClick={() => handleDelete(image, 'image')}
              >
                <DeleteIcon />
              </DeleteButton>
            </MediaBox>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Uploaded Videos
      </Typography>
      <Grid container spacing={2}>
        {videos.map((video, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <MediaBox>
              <video src={video} controls style={{ width: '100%' }} />
              <DeleteButton
                color="secondary"
                aria-label="delete"
                onClick={() => handleDelete(video, 'video')}
              >
                <DeleteIcon />
              </DeleteButton>
            </MediaBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MediaManager;
