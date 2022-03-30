import React from "react";

/*Components*/
import Input from "../../components/Input/Index";

const RegisterUserClient = () => {
  const onDataChange = (id, value) => {};

  const onSaveData = () => {};

  return (
    <div className='form'>
      <h2 className='title'>Create Account</h2>
      <div>
        <h2 className='form-subtitle'>Basic Information</h2>
        <Input
          id='firstName'
          type='text'
          title='First Name'
          isRequired={true}
          onSaveData={onDataChange}
          extraCss='mb-2'
        />
        <Input
          id='lastName'
          type='text'
          title='Last Name'
          isRequired={true}
          onSaveData={onDataChange}
          extraCss='mb-2'
        />
        <Input
          id='email'
          type='email'
          title='Email'
          isRequired={true}
          onSaveData={onDataChange}
        />
      </div>
      <div>
        <h2 className='form-subtitle'>User Information</h2>
        <Input
          id='userName'
          type='text'
          title='User Name'
          isRequired={true}
          onSaveData={onDataChange}
          extraCss='mb-2'
        />
        <Input
          id='password'
          type='password'
          title='Password'
          isRequired={true}
          onSaveData={onDataChange}
          extraCss='mb-2'
        />
        <Input
          id='password'
          type='password'
          title='Confirm Password'
          isRequired={true}
          onSaveData={onDataChange}
        />
      </div>
      <div>
        <h2 className='form-subtitle'>Address Information</h2>
        <Input
          id='country'
          type='text'
          title='Country'
          isRequired={false}
          onSaveData={onDataChange}
          extraCss='mb-2'
        />
        <Input
          id='state'
          type='text'
          title='State'
          isRequired={false}
          onSaveData={onDataChange}
          extraCss='mb-2'
        />
        <Input
          id='city'
          type='text'
          title='City'
          isRequired={false}
          onSaveData={onDataChange}
          extraCss='mb-2'
        />
        <Input
          id='street'
          type='text'
          title='Street'
          isRequired={false}
          onSaveData={onDataChange}
          extraCss='mb-2'
        />
        <Input
          id='other'
          type='text'
          title='Other'
          isRequired={false}
          onSaveData={onDataChange}
        />
      </div>
      <div className='ml-auto'>
        <button className='btn btn-default-hover btn-cancel mr-2' onClick={onSaveData}>
          Cancel
        </button>
        <button className='btn btn-default-hover' onClick={onSaveData}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default RegisterUserClient;
