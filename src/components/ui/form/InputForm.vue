<template>
  <LabelForm :idLabel="idLabel" :name="name">
    <input
      :value="modelValue"
      @input="updateInput"
      :id="idLabel"
      :type="typeInput"
      :min="min"
      :max="max"
      :placeholder="placeholder"
    />
  </LabelForm>
</template>

<script setup>
import LabelForm from "@/components/ui/form/LabelForm.vue";
const props = defineProps({
  idLabel: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  min: {
    type: String,
    default: "1",
  },
  max: {
    type: String,
    default: "1000",
  },
  modelValue: [String, Number],
  typeInput: { type: String, default: "text" },
  placeholder: { type: String },
});
const emit = defineEmits(["update:modelValue"]);

const updateInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style lang="scss" scoped>
@include grup-input();
</style>
