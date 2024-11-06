import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "../components/button";

const FormBase = ({ fields, onSubmit, buttonTitle }) => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    return (
        <View style={styles.container}>
            {fields.map((field, index) => (
                <View key={index}>
                    <Controller
                        control={control}
                        name={field.name}
                        rules={field.rules}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View
                            style={styles.input}
                            >
                                <Text style={styles.label}>{field.label}</Text>
                                <TextInput
                                secureTextEntry={field.name === "password"}
                                style={styles.inputText}
                                    placeholder={field.label}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            </View>

                        )}
                    />
                    {errors[field.name] && <Text style={styles.roles}>{errors[field.name].message}</Text>}
                </View>
            ))}
            <Button onPress={handleSubmit(onSubmit)} title={buttonTitle||"Enviar"} />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2B2B2B",
        marginTop: 15,
        width: "75%",
        gap: 10,
      },
    label: {
        marginBottom: 5,
        fontSize: 16,
        color: "white",
      },
      
      inputText: {
        height: 40,
        paddingLeft: 10,
        backgroundColor: "#D9D9D9",
        borderRadius: 7,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
      },

      roles: {
        color: "#B5241F",
        width: "75%",
        fontWeight: "bold",
        fontSize: 16,
      },
})



export default FormBase;