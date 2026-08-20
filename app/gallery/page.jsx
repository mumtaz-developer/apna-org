  'use client';
export default function FormPage() {

  const handleSubmit = async (event) => {
    event.preventDefault();
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>Simple Form (Bina Hooks ke)</h1>
      
      {/* Yahan form ke andar onSubmit lagana lazmi hai */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '15px', marginTop: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input type="text" name="name" placeholder="Enter name" style={{ padding: '8px', width: '100%' }} />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Address:</label>
          <input type="text" name="address" placeholder="Enter address" style={{ padding: '8px', width: '100%' }} />
        </div>

        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}