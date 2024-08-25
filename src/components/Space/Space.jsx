import React from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import {
    Input,
    Select,
    Checkbox as AntdCheckbox,
    Switch as AntdSwitch,
    Slider as AntdSlider,
    Space, ColorPicker,
    Segmented
} from "antd";
import { DownOutlined } from '@ant-design/icons';
import "./Space.css"
import Logo from '../Header/Logo';
import axios from 'axios';

function Space1() {
    const [value, setValue] = useState('Create');
    const [open, setOpen] = useState(false);
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            questions: [
                { question: 'What are you working on?' },
                { question: 'How has [our product / service] helped?' },
                { question: 'What is the best thing about [our product / service]?' }
            ]
        }
    });

    const onSubmit = async (data) => {
        const formData = {
            id : uniqueId,
            spaceTitle : data.headerTitle,
            spaceTheme : data.colorTheme,
            spaceCustomMessage : data.customMessage,
            spaceName : data.spaceName,
            spaceQuestions : data.questions,
            updateLogo : data.updateLogo,
            spaceLogo : data.newLogoURL,
            spaceCollectStarRating : data.collectStarRating,
            spaceCollectionType : data.collectionType,
        }
        console.log("formdata", formData);
        try{
            const response = await axios.post('/space/create-space', data);
            console.log("response  ::::::", response.data);
        } catch (error){
            console.log(error)
        }
    };

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'questions'
    });

    const handleQuestionChange = (index, value) => {
        const newQuestions = [...questions];
        newQuestions[index] = value;
        setQuestions(newQuestions);
    };

    const handleRemove = (index) => {
        const newQuestions = questions.filter((_, i) => i !== index);
        setQuestions(newQuestions);
        remove(index);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
        else {
            setSelectedImage(URL.createObjectURL(image))
        }
    };

    // const removeBackgroundFromImageFile = (selectedImage) =>{({
    //     path: selectedImage ,
    //     // apiKey: "QpwLcm4PdHhHFdPMUu2gRBjv",
    //     size: "regular",
    //     type: "auto",
    //     scale: "50%",
    //     outputFile 
    //   }).then(setSelectedImage(outputFile)).catch((errors) => {
    //     console.log(JSON.stringify(errors));
    //    });
    // }
    const [selectedImage, setSelectedImage] = useState(null);
    const [color, setColor] = useState("#1677ff");
    const [spaceName, setSpaceName] = useState('');
    const [headerTitle, setHeaderTitle] = useState('');
    const [customMessage, setCustomMessage] = useState('');
    const [questions, setQuestions] = useState(fields.map(field => field.question));
    const uniqueId = nanoid();
    return (
        <div className='bg-container flex justify-center'>
            <div className='items-center mb-12  rounded-lg mt-8 w-10/12 border-[0.5] text-gray-300'>
                <div className='bg-[#4755696c] py-4 border rounded-2xl mx-auto px-6 mt-4 flex justify-between shadow-xl' style={{
                    borderRadius: " 1rem 1rem 0 0",
                    borderBottomColor: "black",
                    // backgroundColor: "rgba(139, 148, 173, 0.51)",
                    backdropFilter: "blur(30px)",
                    boxShadow: "0px 0px 30px rgba(227, 228, 237, 0.2)",
                    border: "1.2px solid rgba(255, 255, 255, 0.18)"
                }}>
                    <Segmented options={['Create', 'Preview']} value={value} onChange={setValue} className='p-1 bg-slate-300 text-slate-500 rounded-md *:' />
                    <div><Logo /></div>
                </div>
                {value === "Create" ?
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto mb-8 p-6  font-Inter font-light shadow-xl bg-[#4755696c]" style={{
                        borderRadius: "0 0 1rem 1rem",
                        backdropFilter: "blur(30px)",
                        boxShadow: "0px 0px 0px rgba(227, 228, 237, 0.2)",
                        border: "1.2px solid rgba(255, 255, 255, 0.18)"
                    }}>
                        <h2 className="text-2xl font-bold mb-4 text-center">Edit Space</h2>

                        <label className=" text-gray-400">Space name * <input {...register('spaceName')} className="w-full bg-slate-300 text-slate-900 p-2 mb-4  active:border-blue-500 rounded-md   text-blank outline-none" 
                            onChange={(e) => setSpaceName(e.target.value)} value={spaceName} 
                        /></label>
                        <div className='mb-4'>
                            <div className='flex'>
                                <label className=" text-gray-400 flex items-center">Update the logo <input type="checkbox" {...register('updateLogo')} className="w-4 h-4 ml-2 rounded-lg border border-blue-500 inline mr-2" /></label>
                                <span className="text-gray-400">square?</span>
                            </div>
                            <div className="mt-2 flex items-center">
                                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                    <img className="h-full w-full object-cover" src="Happy.svg" alt="Current Logo" />
                                </span>
                                <span className="ml-5 rounded-md shadow-sm">
                                    <label
                                        htmlFor="newLogoURL"
                                        className="py-2 px-3 bg-slate-300 rounded-md text-sm leading-4 font-medium text-gray-900 hover:bg-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out cursor-pointer "
                                    >
                                        <input
                                            type="file"
                                            accept="image/*"
                                            {...register('logoImage')}
                                            id="newLogoURL"
                                            className="newAvatarFile hidden "
                                            onChange={handleImageChange}
                                        />
                                        Change
                                    </label>
                                </span>
                            </div>
                        </div>
                        <label className=" text-gray-400 ">Header title * <input {...register('headerTitle')} className="bg-slate-300 text-slate-900 w-full p-2 mb-4  rounded-md " onChange={(e) => setHeaderTitle(e.target.value)}
                            value={headerTitle} /></label>
                        <label className=" text-gray-400">Your custom message <textarea {...register('customMessage')} className="w-full p-2 mb-4 bg-slate-300 text-slate-900 rounded-md" onChange={(e) => setCustomMessage(e.target.value)}></textarea></label>
                        <label className=" text-gray-400">Questions
                            {fields.map((field, index) => (
                                <div key={field.id} className="flex items-center mb-4">
                                    <input
                                        {...register(`questions.${index}.question`)}
                                        className="flex-grow p-2 bg-slate-300 text-slate-900 border-gray-300 rounded-md text- "
                                        onChange={(e) => handleQuestionChange(index, e.target.value)}
                                        value={questions[index]}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemove(index)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer ml-2" fill="none" viewBox="0 0 24 24" stroke="#9ca3af"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>

                                    </button>
                                </div>
                            ))}
                        </label>


                        <section className="mb-4">
                            {fields.length < 5 && (
                                <button
                                    type="button"
                                    onClick={() => append({ question: '' })}
                                    className="flex items-center text-gray-400"
                                >
                                    <img src='addMore.svg' width="20px" height="20" className='mr-1 '></img>
                                    Add one (up to 5)
                                </button>
                            )}
                        </section>

                        <div className='flex flex-wrap gap-16 '>
                            <div>
                                <label className="grid text-gray-400">Collection type
                                    <select {...register('collectionType')} className="p-2 mb-4 bg-slate-300 text-slate-900  rounded-md mt-2">
                                        <option value="textAndVideo">Text and video</option>
                                        <option value="textonly">Text only</option>
                                        <option value="videoonly">Video only</option>

                                    </select>
                                </label>

                            </div>

                            <div>
                                <section className=''>
                                    <label className='block text-gray-400 mb-2 '>Collect star rating

                                    </label>
                                    <Controller
                                        control={control}
                                        name="collectStarRating"
                                        render={({ field: { value, onChange } }) => (
                                            <AntdSwitch onChange={onChange} checked={value} className='bg-slate-300' />
                                        )}
                                    />
                                </section>
                            </div>

                            <div>
                                <label className='grid text-gray-400'>Select theme
                                    <span className='mt-2'>
                                        <Space direction="vertical">
                                            <Controller
                                                name="colorTheme"
                                                control={control}
                                                onChange
                                                render={({ field: { value, onChange } }) => (
                                                    <ColorPicker
                                                        open={open}
                                                        onOpenChange={setOpen}
                                                        checked={value}
                                                        value={color}
                                                        defaultValue="#1677ff"
                                                        className='bg-slate-300  border-none pl-1'
                                                        onChange={(color) => {
                                                            onChange(color.toHexString());
                                                            setColor(color.toHexString());
                                                        }}
                                                        showText={() => (
                                                            <DownOutlined
                                                                rotate={open ? 180 : 0}
                                                                style={{
                                                                    color: '#eef0f3',
                                                                }}
                                                            />
                                                        )}
                                                    />
                                                )}
                                            />
                                        </Space>
                                    </span>
                                </label>

                            </div>

                        </div>
                        <div className='flex justify-center'>
                            <button type="submit" className="w-8/12  p-2 bg-[#272df3d6] text-white rounded-md mt-4">Update Space</button>
                        </div>
                    </form> :

                    <div className="w-full mx-auto mb-8 p-6 rounded-[3rem] flex flex-col justify-center items-center bg-[#4755696c]" style={{
                        borderRadius: "0 0 1rem 1rem",
                        backdropFilter: "blur(30px)",
                        boxShadow: "0px 0px 0px rgba(227, 228, 237, 0.2)",
                        border: "1.2px solid rgba(255, 255, 255, 0.18)"
                    }}>
                        <h2 className="text-2xl mb-4 text-center font-Inter font-extrabold">View Space</h2>

                        <div className='w-8/12 mb-8 rounded-2xl pt-8 font-Inter text-[#d9e3ea] flex justify-center' style={{
                            backgroundColor: color
                        }}>
                            <div className='flex flex-col w-8/12'>
                                <div className='flex justify-center m-8'>
                                    {selectedImage && <img src={selectedImage} width="100" height="100" alt="Profile Preview" />}
                                </div>

                                <div className='flex justify-center mb-4 text-center'>
                                    <span className=' text-[32px] font-[900]'>{headerTitle}</span>
                                </div>
                                <div className='flex justify-center'>
                                    <p>{customMessage}</p>
                                </div>

                                <div className='mb-8'>
                                    <span className='text-[18px] font-[600]'>Questions</span>
                                    <ul class="mt-2 max-w-xl text-base list-disc pl-4">
                                        {questions.map((question, index) => (
                                            <li key={index}>{question}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='flex flex-wrap gap-4 justify-center mb-12'>
                                    <button
                                        className='bg-[#101B43] flex justify-center items-center w-4/5 h-10 rounded-md'
                                    > <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline mr-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                        <span>Record a video</span></button>

                                    <button
                                        className='bg-[#4C5B83] flex justify-center items-center w-4/5 h-10 rounded-md'
                                    > <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                        <span>Record a video</span></button>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default Space1