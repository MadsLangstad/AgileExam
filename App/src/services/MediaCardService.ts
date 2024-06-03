import axios from "axios";
import {IMediaCard} from "../interfaces/IMediaCard.ts";

const MediaCardService = (() => {
    const apiEndpoints = {
        MediaCard: "http://localhost:5017/api/MediaCard",
        Image: "http://localhost:5017/api/Upload/upload",
    }
    const getAllMediaCards = async () => {
        try {
            const result = await axios.get(apiEndpoints.MediaCard);
            console.log(result.data);
            return result.data;
        } catch (error) {
            console.error("Error in getting all card", error);
        }
    };
    const getById = async (id: number) => {
        try {
            const result = await axios.get(`${apiEndpoints.MediaCard}/${id}`);
            console.log(result);
            return result.data;
        } catch (error) {
            console.error("Error in getting card by id", error);
        }
    };
    const deleteById = async (id: number) => {
        try {
            const result = await axios.delete(`${apiEndpoints.MediaCard}/${id}`);
            console.log(result);
            return result.data;
        } catch (error) {
            console.error("Error in deleting card by id", error);
        }
    };
    const updateMediaCard = async (updatedMediaCard: IMediaCard) => {
        try {
            const result = await axios.put(
                `${apiEndpoints.MediaCard}/${updatedMediaCard.id}`,
                updatedMediaCard
            );
            console.log(result);
            return result.data;
        } catch (error) {
            console.error("Error in updating card", error);
        }
    };
    const createMediaCard = async (newMediaCard: IMediaCard, image: File): Promise<void> => {
        try {
            const driverResult = await axios.post(
                apiEndpoints.MediaCard,
                newMediaCard
            );
            if (driverResult.status === 200 || driverResult.status === 201) {
                const formData = new FormData();
                formData.append("formFile", image);

                const uploadResult = await axios({
                    url: apiEndpoints.Image,
                    method: "POST",
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                });
                if (
                    uploadResult.status !== 200 &&
                    uploadResult.status !== 201
                ) {
                    console.error("Image upload failed", uploadResult);
                }
            } else {
                console.error("Card creation failed", driverResult);
            }
        } catch (error) {
            console.error("Error in creating mediaCard or uploading image", error);
        }
    };

    return {
        getAllMediaCards,
        getById,
        deleteById,
        updateMediaCard,
        createMediaCard,
    }

})();

export default MediaCardService;