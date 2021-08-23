import React from 'react';

const AddBook = () => (
  <form>
    <input name="title" placeholder="Add a title book" />
    <select defaultValue="category">
      <option value="category" disabled>Category</option>
      <option value="technology">Technology</option>
      <option value="fiction">Fiction</option>
      <option value="fantasy">Fantasy</option>
      <option value="romance">Romance</option>
      <option value="contemporary">Contemporary</option>
      <option value="mystery">Mystery</option>
      <option value="horror">Horror</option>
      <option value="paranormal">Paranormal</option>
      <option value="science">Science</option>
      <option value="art">Art</option>
      <option value="cooking">Cooking</option>
      <option value="motivational">Motivational</option>
      <option value="history">History</option>
      <option value="health">Health</option>
      <option value="humor">Humor</option>
      <option value="travel">Travel</option>
      <option value="guide">Guide/How-to</option>
    </select>
    <button type="submit">ADD BOOK</button>
  </form>
);

export default AddBook;
