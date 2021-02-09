import React from 'react';

const FatalException = ({message}: {message: string}) => {
    return (
        <div>
            Fatal Error: {message}
        </div>
    );
};

export default FatalException;
