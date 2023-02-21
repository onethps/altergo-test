import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardHeader,
  IconButton,
  Button,
  CardMedia,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { postsActions } from '../redux/reducers/posts';
import { deletePost, fetchPosts } from '../redux/middleware/posts';
import CloseIcon from '@mui/icons-material/Close';

export const News = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.posts.posts);
  const status = useAppSelector((state) => state.posts.status);

  console.log(posts);

  const [showButton, setShowButton] = useState(false);
  const [postsCount, setPostsCount] = useState(6);

  const isFetching = status === 'loading';

  const handleLoadMorePosts = () => setPostsCount((prev) => prev + 6);

  const handleDeletePost = (postId: number) => {
    dispatch(deletePost({ postId }));
    setPostsCount(posts.length - 1);
  };

  useEffect(() => {
    dispatch(fetchPosts({ limit: postsCount }))
      .unwrap()
      .then((res) => {
        console.log(res.length);
        if (res.length < postsCount) {
          setShowButton(true);
        }
      });
  }, [postsCount]);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      {posts.length ? (
        posts.map((post) => (
          <Card key={post.id} sx={{ width: '350px' }}>
            <CardHeader
              sx={{
                display: 'flex',
                overflow: 'hidden',
                '& .MuiCardHeader-content': {
                  overflow: 'hidden',
                },
              }}
              titleTypographyProps={{ noWrap: true }}
              action={
                <IconButton
                  aria-label="delete button"
                  onClick={() => handleDeletePost(post.id)}
                >
                  <CloseIcon />
                </IconButton>
              }
              title={post.title}
            />
            <CardMedia
              component="img"
              alt="post image"
              height="194"
              image="https://via.placeholder.com/600"
            />
            <CardContent>
              <Typography>{post.body}</Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            minHeight: '300px',
          }}
        >
          <Typography textAlign="center" variant="h5" sx={{ opacity: 0.5 }}>
            Empty List
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {!showButton && (
          <Button variant="contained" onClick={handleLoadMorePosts} disabled={isFetching}>
            Load More
          </Button>
        )}
      </Box>
    </Box>
  );
};
