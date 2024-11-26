import { createAsyncThunk } from '@reduxjs/toolkit';

const myAsyncThunk = createAsyncThunk(
  'sliceName/actionName', // שם ה-Action
  async (payload, thunkAPI) => {
    // פעולה אסינכרונית
    try {
      const response = await fetch('/api/example');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data; // תוצאה שמתווספת ל-payload
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

parameter thunkApi =acesse the state actions
parameter payload = acess the payload 


the builder = has the acess of loading,fullfiled,rejected,