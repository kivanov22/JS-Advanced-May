import  furnitureService  from '../../services/furnitureService.js';
import { dashboardTemplate } from './dashboardTemplate.js';


async function getView(context) {
    let loadAllFurniture = await furnitureService.getAll();
    let templateResult = dashboardTemplate(loadAllFurniture);
    context.renderView(templateResult);
}

export default {
    getView
}