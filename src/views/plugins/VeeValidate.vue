<template>
  <div>
    <p>
      邮箱：
      <input v-validate="'required|email'" name="email" type="text">
      <span>{{ errors.first('email') }}</span>
    </p>
    <p>
      数字&邮箱：
      <input
        v-validate="{ required: true, numeric: true, email: true }"
        name="a_number"
        type="text"
      >
      <span>{{ errors.first('a_number') }}</span>
    </p>
    <p>
      数字&邮箱：
      <input v-validate="multiple" name="邮箱" type="text">
      <span>{{ errors.first('邮箱') }}</span>
    </p>
    <p>
      长度：
      <input v-validate="'required|max:3'" name="长度" type="number">
      <span>{{ errors.first('长度') }}</span>
    </p>
    <p>
      自定义规则：
      <input v-validate="'required|truthy'" name="trueField" type="text">
      <span>{{ errors.first('trueField') }}</span>
    </p>
  </div>
</template>

<script>
import { Validator } from "vee-validate"

// const validator = {
//   getMessage(field, args) {
//     // will be added to default locale messages.
//     // Returns a message.
//   },
//   validate(value, args) {
//     // Returns a Boolean or a Promise that resolves to a boolean.
//   }
// }

Validator.extend('truthy', {
  getMessage: field => 'The ' + field + ' value is not truthy.',
  validate: value => !! value
});

let instance = new Validator({ trueField: 'truthy' });

export default {
  name: "VeeValidate",
  data: function() {
    return {
      multiple: {
        required: true,
        numeric: true,
        email: true
      },

      // 
      validate: instance
    };
  }
};
</script>
