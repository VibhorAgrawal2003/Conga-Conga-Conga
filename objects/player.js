class Player{

    constructor(){
        // Position
        this.x;
        this.y;
        this.direction;

        // Physics
        this.speed;
        this.moving;

        // Visuals
        this.visible;
        this.sheet;
        this.sprite;
        this.width;
        this.height;

        // Frames
        this.down_walk_frame = "down1";
        this.up_walk_frame = "up1";
        this.right_walk_frame = "right1";
        this.left_walk_frame = "left1";

        this.dr_walk_frame = "dr1";
        this.dl_walk_frame = "dl1";
        this.ur_walk_frame = "ur1";
        this.ul_walk_frame = "ul1";

        this.LoadObject();
        this.DebugValues();
    }

    DebugValues(){
        console.log("visible: ", this.visible);
        console.log("sheet: ", this.sheet);
        console.log("sprite: ", this.sprite);
        console.log("x: ", this.x);
        console.log("y: ", this.y);
        console.log("width: ", this.width);
        console.log("height: ", this.height);
    }

    LoadObject(){
        this.x = canvas.width / 2 - player_sprites.width / 2;
        this.y = canvas.height / 2 - player_sprites.height / 2;
        this.direction = "down";

        this.speed = 4;
        this.moving = false;

        this.visible = true;
        this.sheet = new Image();
        this.sheet.src = player_sprites.path;
        this.width = player_sprites.width;
        this.height = player_sprites.height;
        this.sprite = player_sprites.down_idle;
        this.DrawObject();
    }

    UpdateObject(){
        this.AnimateObject();
        this.MoveObject();
        this.DrawObject();
    }

    DrawObject(){
        ctx.save();

        ctx.drawImage(
            this.sheet,
            this.sprite.start_x, this.sprite.start_y, // Top Left Corner
            this.sprite.cover_x, this.sprite.cover_y, // Bottom Right Corner
            this.x, this.y, // Position
            this.sprite.scale_x, this.sprite.scale_y, // Scaling factors
        )

        ctx.restore();
    }

    MoveObject(){
        if(this.moving){

            if(this.direction == "dr"){
                this.y += this.speed * Math.cos(45 * Math.PI / 180);
                this.x += this.speed * Math.sin(45 * Math.PI / 180);
            }

            if(this.direction == "dl"){
                this.y += this.speed * Math.cos(45 * Math.PI / 180);
                this.x -= this.speed * Math.sin(45 * Math.PI / 180);
            }

            if(this.direction == "ur"){
                this.y -= this.speed * Math.cos(45 * Math.PI / 180);
                this.x += this.speed * Math.sin(45 * Math.PI / 180);
            }

            if(this.direction == "ul"){
                this.y -= this.speed * Math.cos(45 * Math.PI / 180);
                this.x -= this.speed * Math.sin(45 * Math.PI / 180);
            }

            if(this.direction == "down"){
                this.y += this.speed;
            }
            if(this.direction == "up" ){
                this.y -= this.speed;
            }
            if(this.direction == "right"){
                this.x += this.speed;
            }
            if(this.direction == "left"){
                this.x -= this.speed;
            }
        }
    }

    AnimateObject() {
        if(this.direction == "down"){
            if(this.moving){
                if(timer % 6 == 0) this.DownWalkAnimation();
            }
            else{
                this.sprite = player_sprites.down_idle;
            }
        } 

        else if(this.direction == "up"){
            if(this.moving){
                if(timer % 6 == 0) this.UpWalkAnimation();
            }
            else{
                this.sprite = player_sprites.up_idle;
            }
        } 

        else if(this.direction == "right"){
            if(this.moving){
                if(timer % 6 == 0) this.RightWalkAnimation();
            }
            else{
                this.sprite = player_sprites.right_idle;
            }
        } 

        else if(this.direction == "left"){
            if(this.moving){
                if(timer % 6 == 0) this.LeftWalkAnimation();
            }
            else{
                this.sprite = player_sprites.left_idle;
            }
        } 

        else if(this.direction == "dr"){
            if(this.moving){
                if(timer % 6 == 0) this.DRWalkAnimation();
            }
            else{
                this.sprite = player_sprites.dr_idle;
            }
        } 

        else if(this.direction == "dl"){
            if(this.moving){
                if(timer % 6 == 0) this.DLWalkAnimation();
            }
            else{
                this.sprite = player_sprites.dl_idle;
            }
        } 

        else if(this.direction == "ur"){
            if(this.moving){
                if(timer % 6 == 0) this.URWalkAnimation();
            }
            else{
                this.sprite = player_sprites.ur_idle;
            }
        } 

        else if(this.direction == "ul"){
            if(this.moving){
                if(timer % 6 == 0) this.ULWalkAnimation();
            }
            else{
                this.sprite = player_sprites.ul_idle;
            }
        } 
    }
    
    DownWalkAnimation(){
        if(this.down_walk_frame == "down1"){
            this.sprite = player_sprites.down_walk2;
            this.down_walk_frame = "down2";
        }
        else if(this.down_walk_frame == "down2"){
            this.sprite = player_sprites.down_walk3;
            this.down_walk_frame = "down3";
        }
        else if(this.down_walk_frame == "down3"){
            this.sprite = player_sprites.down_walk4;
            this.down_walk_frame = "down4";
        }
        else if(this.down_walk_frame == "down4"){
            this.sprite = player_sprites.down_walk1;
            this.down_walk_frame = "down1";
        }
    }

    UpWalkAnimation(){
        if(this.up_walk_frame == "up1"){
            this.sprite = player_sprites.up_walk2;
            this.up_walk_frame = "up2";
        }
        else if(this.up_walk_frame == "up2"){
            this.sprite = player_sprites.up_walk3;
            this.up_walk_frame = "up3";
        }
        else if(this.up_walk_frame == "up3"){
            this.sprite = player_sprites.up_walk4;
            this.up_walk_frame = "up4";
        }
        else if(this.up_walk_frame == "up4"){
            this.sprite = player_sprites.up_walk1;
            this.up_walk_frame = "up1";
        }
    }

    RightWalkAnimation(){
        if(this.right_walk_frame == "right1"){
            this.sprite = player_sprites.right_walk2;
            this.right_walk_frame = "right2";
        }
        else if(this.right_walk_frame == "right2"){
            this.sprite = player_sprites.right_walk3;
            this.right_walk_frame = "right3";
        }
        else if(this.right_walk_frame == "right3"){
            this.sprite = player_sprites.right_walk4;
            this.right_walk_frame = "right4";
        }
        else if(this.right_walk_frame == "right4"){
            this.sprite = player_sprites.right_walk1;
            this.right_walk_frame = "right1";
        }
    }

    LeftWalkAnimation(){
        if(this.left_walk_frame == "left1"){
            this.sprite = player_sprites.left_walk2;
            this.left_walk_frame = "left2";
        }
        else if(this.left_walk_frame == "left2"){
            this.sprite = player_sprites.left_walk3;
            this.left_walk_frame = "left3";
        }
        else if(this.left_walk_frame == "left3"){
            this.sprite = player_sprites.left_walk4;
            this.left_walk_frame = "left4";
        }
        else if(this.left_walk_frame == "left4"){
            this.sprite = player_sprites.left_walk1;
            this.left_walk_frame = "left1";
        }
    }

    DRWalkAnimation(){
        if(this.dr_walk_frame == "dr1"){
            this.sprite = player_sprites.dr_walk2;
            this.dr_walk_frame = "dr2";
        }
        else if(this.dr_walk_frame == "dr2"){
            this.sprite = player_sprites.dr_walk3;
            this.dr_walk_frame = "dr3";
        }
        else if(this.dr_walk_frame == "dr3"){
            this.sprite = player_sprites.dr_walk4;
            this.dr_walk_frame = "dr4";
        }
        else if(this.dr_walk_frame == "dr4"){
            this.sprite = player_sprites.dr_walk1;
            this.dr_walk_frame = "dr1";
        }
    }

    DLWalkAnimation(){
        if(this.dl_walk_frame == "dl1"){
            this.sprite = player_sprites.dl_walk2;
            this.dl_walk_frame = "dl2";
        }
        else if(this.dl_walk_frame == "dl2"){
            this.sprite = player_sprites.dl_walk3;
            this.dl_walk_frame = "dl3";
        }
        else if(this.dl_walk_frame == "dl3"){
            this.sprite = player_sprites.dl_walk4;
            this.dl_walk_frame = "dl4";
        }
        else if(this.dl_walk_frame == "dl4"){
            this.sprite = player_sprites.dl_walk1;
            this.dl_walk_frame = "dl1";
        }
    }

    URWalkAnimation(){
        if(this.ur_walk_frame == "ur1"){
            this.sprite = player_sprites.ur_walk2;
            this.ur_walk_frame = "ur2";
        }
        else if(this.ur_walk_frame == "ur2"){
            this.sprite = player_sprites.ur_walk3;
            this.ur_walk_frame = "ur3";
        }
        else if(this.ur_walk_frame == "ur3"){
            this.sprite = player_sprites.ur_walk4;
            this.ur_walk_frame = "ur4";
        }
        else if(this.ur_walk_frame == "ur4"){
            this.sprite = player_sprites.ur_walk1;
            this.ur_walk_frame = "ur1";
        }
    }

    ULWalkAnimation(){
        if(this.ul_walk_frame == "ul1"){
            this.sprite = player_sprites.ul_walk2;
            this.ul_walk_frame = "ul2";
        }
        else if(this.ul_walk_frame == "ul2"){
            this.sprite = player_sprites.ul_walk3;
            this.ul_walk_frame = "ul3";
        }
        else if(this.ul_walk_frame == "ul3"){
            this.sprite = player_sprites.ul_walk4;
            this.ul_walk_frame = "ul4";
        }
        else if(this.ul_walk_frame == "ul4"){
            this.sprite = player_sprites.ul_walk1;
            this.ul_walk_frame = "ul1";
        }
    }
}