import React from 'react';

function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        zIndex: '900',
        width: '100%',
        height: '100vh',
        background: '#fff',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: '0',
      }}
    >
      <div className="loading"></div>
    </div>
  );
}

export default Loading;
