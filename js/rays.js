function castAllRays(){
    let columnId = 0;
    let rayAngle = (player.rotationAngle - (FOV_ANGLE / 2));

    rays = [];
    for(let i = 0; i < NUM_RAYS; i++){
        let ray = new Ray(rayAngle);
        ray.cast(columnId);
        rays.push(ray);
        rayAngle += (FOV_ANGLE / NUM_RAYS);
        columnId++;
    }
}