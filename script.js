/* ═══════════════════════════════════════════════════════
   OUR LITTLE CINEMA — script.js
   Complete interactive film experience
═══════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────
   CONFIGURATION — Edit these values
───────────────────────────────────────────────────────*/
const CONFIG = {
  yourName:  "zhnif_",          // ← Change this to your name
  herName:   "Naurah Jannah Alice Mufidah",           // ← Change this to her name
  birthday:  "December 14",      // ← Change this (e.g., "October 14")
};

/* ─────────────────────────────────────────────────────
   MESSAGE DATABASE — 50+ unique messages
   Organized by category. Edit freely.
───────────────────────────────────────────────────────*/
const MESSAGES = {

  tired: [
    `You don't have to be okay today. You really don't.

There's this pressure we carry around—this invisible expectation that we should be able to handle everything, that rest is something we have to earn, that tiredness is some kind of personal failure. It isn't. You're a person, not a machine. You're allowed to run low.

Whatever made you tired—whether it was one enormous thing or a hundred small ones stacking up—I want you to know that it's valid. You don't have to explain it or justify it or apologize for it. Some days just take more than they give.

So here's what I want you to do right now: put something down. Not everything. Just one thing you've been carrying that can wait. It will still be there when you have more energy to pick it back up. But right now, you don't need to be carrying all of it.

I see how hard you work. I see how much you give. And I want you to know that I'm not keeping score, but if I were—you've already given more than enough.

Rest is not giving up. It's how you come back.`,

    `Being tired doesn't mean you're weak. It means you've been strong for a long time without enough support.

There's something I think about sometimes—how you keep going even on the days when it looks like there's nothing left. I don't say that to add pressure. I say it because I think you underestimate how remarkable that is.

You've gotten through every difficult day you've ever had. Every single one. There's a version of you that's already survived things that felt unsurvivable. She's in there. She's not gone. She's just resting.

When the tiredness feels like it's settled into your bones and won't leave, I want you to remember that I'm not expecting anything from you right now. Not performance, not progress, not okayness. Just you. Just being. That's enough. You're enough.

Come back when you're ready. I'll be here.`,

    `I know that kind of tired that sleep doesn't fix. The kind that lives in your chest, not your body.

That tired is telling you something important—not that you're failing, but that something needs attention. Maybe something you've been putting off. Maybe something you've been pretending isn't there. Maybe just the simple fact that you've been taking care of everyone and everything except yourself.

I want to give you permission to stop pushing for a minute. Not forever. Just for right now.

You don't have to figure anything out today. You don't have to solve the things that feel heavy or plan your way out of anything. You just have to exist for a bit. Breathe. Let things be unresolved for a few hours.

The world will not fall apart if you take a break. I promise.`,

    `The tiredness you're feeling is real. Please don't argue with yourself about whether you're "allowed" to feel it.

Sometimes we build these impossible standards for ourselves—that we should be able to go indefinitely, that slowing down is laziness, that feeling depleted means we're doing something wrong. None of that is true. All of it is just noise.

You are a person who tries very hard. I've watched you try. And I think part of what makes you tired is that you try hardest at exactly the things that don't always give you back what you put in—other people's feelings, impossible situations, outcomes you can't fully control.

What I want you to know is simple: you don't have to be performing right now. Not for me, not for anyone. This moment, just as it is—a little tired, a little worn—is still a moment I'm glad to be in with you.

Rest. You've earned it a thousand times over.`,

    `Some days the weight of just existing feels heavier than it has any right to be.

On those days, I want you to know that I'm not on the other side of some invisible line, watching and judging. I'm right there in it with you, or as close as I can get. I see the effort it takes sometimes to just get up, to just be present, to just keep going.

You don't have to explain that to me. You don't have to make it make sense.

What I'd ask of you on a day like this is just one small thing: be a little gentler with yourself than you'd normally be. Talk to yourself the way you'd talk to someone you love. You'd never tell someone you loved that they were weak for being tired. You'd tell them to rest. You'd tell them it's okay.

So tell yourself that. It's okay. Rest is okay. You are okay. Even in the tired, you are okay.`,

    `Exhaustion is its own kind of heaviness. It makes everything else harder—harder to be patient, harder to stay optimistic, harder to feel like yourself.

When that happens, I want you to remember that the version of you that shows up tired is still you. It's not a lesser version or a broken version. It's just a version that needs something different right now.

And what it needs, I think, is not a solution or a plan or an action item. It needs softness. Stillness. A moment to not be required to do anything at all.

I know I can't always give you that in the way you deserve. But I can tell you that when you need to fall apart a little, I'd rather you do it with me than alone. I would rather hold the messy, tired version of you than never hold you at all.

You matter to me in all your states. Not just the bright, energized ones.`,

    `Feeling tired doesn't mean you're not doing enough. It might actually mean you've been doing too much.

There's a kind of tiredness that comes from pouring yourself out in all directions—from giving to people who don't always give back, from caring about things that don't always care back, from holding yourself to standards that no one else is holding you to but you.

If that's the tired you're feeling, I want to gently suggest: you can let some of that go. Not forever, not completely—but enough to breathe.

You are not obligated to keep every plate spinning at all times. You are not failing anyone by having limits. You are a person with a finite amount of energy, and you have every right to protect it.

Spend some of that energy on yourself today. Not because you've earned it. Because you already have it, and you deserve to keep some of it.`,

    `Rest is not a reward. It's not something you earn after you've done enough, accomplished enough, helped enough.

Rest is just something you need. Like water. Like sleep. Like quiet.

And I know you know this intellectually. But I also know that sometimes knowledge and feeling are two very different things, and no amount of knowing something is good for you makes it easier to actually do.

So I'll just say it plainly: whatever you haven't finished yet can wait. Whatever feels like it needs your attention right now—most of it can wait a few hours while you let yourself be still.

You've given today whatever you could. That has to be enough. Let it be enough. I love you whether or not you accomplish anything at all.`,
  ],

  sad: [
    `Sadness is not the absence of love. Sometimes it's exactly the presence of it—love for the way things were, or the way you hoped they'd be, or the people and versions of life that didn't turn out the way you needed.

If you're sad today, I'm not going to try to argue you out of it. I'm not going to give you a list of reasons to feel better. I'm just going to sit here with you in it, as close as words can get.

Feeling things this deeply—it's not a flaw. It means you're alive in the most real way. It means things matter to you. That capacity to feel is the same thing that makes you wonderful. It doesn't stop being true when it hurts.

Cry if you need to. Let it move through you instead of holding it in like something to be ashamed of. And know that on the other side of this—however long it takes to get there—I'll still be here.

You are not alone in this. Not really. Even in the quiet, even in the distance between us right now—I'm with you.`,

    `There are days when sadness doesn't have a reason, and that's the hardest kind.

Because at least if you knew why, you could try to fix it or explain it or move around it. But when it just settles in like weather, when it's just there without any name—that can feel very disorienting.

I want you to know: you don't need a reason. You don't have to justify how you feel to anyone, including yourself. Emotions aren't logical. They don't require cause and effect to be real.

What you're feeling right now is real. And it will shift. It always does—not because you forced it or reasoned it away, but because feelings move. They are not permanent structures. They're more like tides.

You're going to come back from this. You always do. I've watched you. And I'll keep watching, for as long as you let me.`,

    `Some grief is quiet. It doesn't announce itself. It just sits behind your eyes and makes everything feel a little further away than usual.

If that's where you are today, I just want to say: that's okay. You don't have to translate it into words or make it legible to anyone. Some things just need to be felt, not explained.

What I want for you right now is the thing I'd want for myself on a day like that: a soft place. Something gentle. Something that doesn't require anything of you.

Maybe that's a blanket and a window. Maybe it's a song you've heard a thousand times. Maybe it's just the knowledge that someone out there is thinking about you with care.

I am. Right now, I am.`,

    `I know that sadness can make everything feel slow and a little colorless—like life is being filtered through something grey.

I'm not going to tell you to look at the bright side, because when you're in the middle of it, that just makes things worse. I'm going to tell you something more useful:

You have survived every sad day you've ever had. Not just survived—you've come back from them. You've come back from things that looked, from the inside, like they had no other side. And you always found one.

This is not the end of anything. It's just a difficult chapter. And chapters end.

When this one does, I'll be the one you find on the other side. And we can talk about all the things you learned from being in it—or we don't have to talk about it at all. We can just move forward together, which we're good at.`,

    `Being sad is not a character flaw. It's a human experience. And you are very, very human—in the best possible way.

I've noticed something about you: you feel things deeply. You can't help it. It's part of how you're built. And that same depth is what makes you empathetic and perceptive and wonderful to be loved by.

So the sadness is just the cost of admission for all the rest. Not a punishment. Not a sign that something is wrong with you. Just the other side of the same coin.

You're going to be okay. Not because I'm saying so—but because you've been okay before, after things that didn't look like they'd allow it. You know how to find your way back.

And this time, like every other time, you will.`,

    `I hate that you're sad. I want to fix it and I know I can't, and that's its own kind of hard.

But here's what I can do: I can tell you that I'm thinking of you. That your sadness matters to me not as something to solve but as something to sit with. That I'm not expecting you to get it together or rally or put on a good face right now.

What I'm expecting of you is nothing. Literally nothing. Just to exist, to feel what you're feeling, to let today be what it needs to be.

Sometimes healing looks like that—like not trying. Like just letting the feelings be feelings without fighting them.

I'm here. Even in the silence, I'm here.`,

    `On the days when sadness shows up without an invitation, I want you to treat yourself like a guest who needs care.

Give yourself what you'd give someone you love on a hard day. A warm drink. A soft space. No requirements. Just gentleness. You are worth that care—not when you earn it or deserve it by some impossible standard, but always, automatically, as a default.

The world will still be there when you're ready to return to it. It doesn't go anywhere. But your wellbeing—that's something you have to actively protect, even from yourself sometimes.

So protect it today. Let the sadness be there without adding shame on top of it. Just the sadness—nothing more.

I love you through all of it.`,

    `Sadness sometimes comes because something mattered. Because you cared about something, or someone, or some version of how things could have been. That's not a flaw. That's what it means to be someone who loves.

And you do love—clearly, genuinely, without keeping score. I see that. I've always seen that.

You deserve the same quality of care that you give. You deserve someone to sit with you in the hard days, to not make you perform okayness, to just be present with you in whatever this is.

I'm trying to be that for you, even from here, even through this. Know that I'm thinking of you with all the tenderness I have.

This passes. You know it does. And I'll be here when it does.`,
  ],

  overthinking: [
    `I know that your brain is working very hard right now.

I know it's turning things over and over, finding new angles, rehearsing conversations, mapping out every possible bad outcome so it can be prepared for them. I know it probably feels productive, like you're doing something useful.

You're not. You're wearing yourself out on problems that may never arrive.

Overthinking is just fear wearing the mask of preparation. It feels like control, but it's actually the absence of it—because what you're really doing is trying to manage uncertainty by imagining all the bad versions of it. And that never works. The bad things, when they come, are never the ones you anticipated. And the things you spent so long dreading often never arrive at all.

So here's what I want you to try: set it down. Just for a few minutes. The thoughts will still be there if you need them. But you don't need them right now.

Right now you just need to breathe. To be here. To exist in this moment, which is actually fine.`,

    `Your brain is not your enemy. But sometimes it behaves like one.

The overthinking isn't malicious—it's protective. Some part of you has decided that if you think hard enough about everything that could go wrong, you'll be safe. It's the oldest form of magic: if I prepare for disaster, maybe I can prevent it.

But it doesn't work that way. Preparation is useful. Rumination is not. And at some point the thinking stops being problem-solving and starts being self-torment.

I want to gently interrupt that loop.

You have survived every scary thing your brain has ever presented to you as catastrophic. The evidence of your life is that you are resilient, adaptive, more capable than your anxious mind gives you credit for.

You don't have to figure everything out tonight. Some things will resolve themselves. Some things will be easier to handle when you're actually in them. And some things you're worrying about will never happen at all.

Breathe. Just breathe. One thing at a time.`,

    `When your mind won't stop, it can feel like you're trapped in a room where all the lights are on and the music is too loud and you just can't get it to stop.

That's exhausting in a very particular way—because there's no physical relief from it. You can't walk away from your own head.

So let's try something small: instead of trying to think your way out of the spiral, just notice that you're in one. Name it, quietly, to yourself. "I'm overthinking right now." That's all. You don't have to stop it. Just recognize it.

Sometimes the naming is enough to create a little distance. A little space. Enough to breathe through.

You are not your thoughts. You are the person watching the thoughts. And from that seat, you have a little more choice about what to do with them.

You're going to be okay. The thoughts are just noise. They will quiet eventually.`,

    `Here's the thing about the worst-case scenario your brain keeps returning to: it has already survived it in your head a hundred times.

You've walked through the disaster, the conversation, the outcome—over and over. And you're still here. Which means even the version of you that imagines the worst is strong enough to come out the other side.

The real version—the one that will actually face whatever comes—is even stronger than that.

I know that's not the most comforting thing when you're in the middle of it. When your brain wants to spiral, logic isn't always the antidote. So I'm not going to give you a list of rational reasons why everything is fine.

I'm just going to tell you that I believe in you. Specifically, concretely, with full knowledge of who you are—I believe you can handle what comes. And I believe most of what you're worrying about won't come at all.

Come back to the present. It's quieter here.`,

    `Overthinking is just love turning inward and eating itself.

You care so much—about getting things right, about not hurting anyone, about not being hurt. And that care is real and good. But when it doesn't have anywhere to go, it starts circling. And then it starts accelerating. And then it's 2am and you're mentally rehearsing a conversation you may never actually have.

What I want you to know is: the caring is good. The caring is one of my favorite things about you. But it doesn't have to express itself this way. It can rest sometimes. The caring will still be there tomorrow.

You are not being careless by letting your mind settle. You are being kind to yourself.

And you deserve kindness, especially from yourself.`,

    `I know that when you're spiraling, the last thing you want is someone to say "just stop thinking about it." So I won't say that.

Instead I'll say: you've already thought about it enough. Whatever the thing is—you've considered it from every angle by now. You've stress-tested it. You've run the simulations. You have done the thinking. It's done.

What you're doing now isn't new thinking. It's the same thinking, on a loop, wearing a different hat each time. And it's taking energy you need for other things.

Give yourself permission to stop. Not because the thing isn't important—but because you've already given it your full attention. You've done your due diligence. You can rest from it now.

The answers, if they're coming, will come more easily after rest. They always do. Your brain does its best work when you're not forcing it.

Let it rest. Let yourself rest. I'm here.`,

    `There's a version of this thought, and a version of this thought, and a version of this thought—and you've been visiting all of them tonight.

And I just want to offer you an exit from that particular building.

The exit doesn't require solving anything. It doesn't require knowing. It just requires choosing, for right now, to be somewhere other than inside the spiral.

Come here instead. Into this sentence. Into this moment. Take a breath that's slow enough to count. Feel your feet wherever they are. Notice something in the room with you—any small thing, it doesn't matter what.

You don't have to figure out tonight. Tonight is already passing. Tomorrow you'll have a different vantage point. The things that look enormous at midnight are often just regular-sized in the morning.

I'm not going anywhere. You're okay. I promise you're okay.`,

    `The loop has been going long enough. I know you know it.

Here's what I think you're actually looking for, underneath all the thinking: reassurance. Safety. The feeling that everything is going to be okay, that you're not going to get it wrong, that the people you care about aren't going anywhere.

So let me give you that directly instead of making you find it at the end of a spiral:

You're going to be okay. You have not ruined anything. You are not too much. You are not making mistakes that can't be recovered from. The people who love you—including me—are not on the verge of leaving. You are doing fine. More than fine.

Take that with you. Let it replace the loop, at least for tonight.

I love you. Come back to the present.`,
  ],

  courage: [
    `I know something is asking for your courage right now. And I know courage doesn't feel the way movies make it look—it doesn't feel like strength. It feels like fear, doing the thing anyway.

Which means if you're afraid, you're already at the threshold. You're already most of the way there.

Whatever it is you're facing—the conversation, the decision, the change—I want you to know that you are not facing it without resources. You have a history of getting through hard things. You have more capability than you've ever fully used. And you have people who believe in you, even when you don't believe in yourself.

I'm one of those people. I believe in you with the specific, concrete, evidence-based belief that comes from actually knowing you. And what I know is that you are capable of more than you think.

Take the step. You don't have to be unafraid. You just have to go.`,

    `I think you're braver than you know. I think you've been brave so many times that it's started to feel ordinary, and you've stopped counting it as courage.

But I notice. I notice how many times you've chosen the harder, more honest path when the easier one was right there. I notice how many times you've shown up for something even when it scared you.

You've been building this quiet courage for a long time. And right now, you need it. And it is there—it's been there all along, underneath the doubt.

So whatever is in front of you: you can do it. Not perfectly. Not without fear. But you can do it. And the version of you on the other side—the one who did the brave thing—she's waiting for you.

Go be her. She's worth the discomfort.`,

    `Courage is rarely loud. Mostly it's quiet and domestic and private—it's saying the thing you're afraid to say, or going to the place you're afraid to go, or just getting out of bed on the days when you'd rather not.

You've been quietly courageous your whole life. I know this even if you don't.

And whatever this particular moment is asking of you—I think you have enough in you to meet it. Not surplus. Not overflow. But enough. Which is all it takes.

When you're on the other side of this, you'll look back at the fear and see it for what it actually was: a gate, not a wall. Something you passed through to get somewhere worth going.

I'll be there when you arrive.`,

    `It's okay to be scared. Scared and brave are not opposites. They are often the exact same thing.

The bravest moments of your life probably didn't feel brave from the inside. They felt terrifying. But you did them anyway. And that's the whole definition.

I'm not going to tell you it will be easy. Maybe it won't be. But I will tell you that you have the capacity to do hard things. You've proven it before. You'll prove it again.

And if it goes imperfectly—which it might—you'll recover. You always have. That's part of your particular kind of strength: not that things don't go wrong, but that you keep going when they do.

Take a breath. Then take the step. I'm with you in spirit for every single one.`,

    `Whatever has you nervous right now—the thing that's making your chest feel tight and your thoughts race—I want you to know something:

The fear you feel before doing something important is your body taking it seriously. It's not a sign that you shouldn't do it. It's a sign that it matters. And things that matter are worth doing with a little fear in your chest.

You don't have to be ready. You just have to begin. Readiness is often just a story we tell ourselves to delay—and what you call "not ready" is usually the exact moment to go.

Go. You'll figure out the rest as you move. You always do. You are remarkably good at adapting, at finding your way in real-time, at being more capable than you expected to be.

Trust that. Trust yourself. I already trust you completely.`,

    `I want to tell you something about the version of you that exists on the other side of the thing you're afraid of.

She's lighter. She's relieved. She's proud—not in a showy way, but in the quiet, private way that comes from doing something that scared you. And she's glad she went, even if it wasn't perfect, even if it was messy.

That version is available to you. She's right there, just on the other side of the decision, the conversation, the step.

The only way to reach her is to go.

You've been brave before. You are brave now. You will be brave again. I've seen it with my own eyes.

Whatever this is—go. I'll be here when you get back.`,

    `Some moments ask more of us than feels fair. They show up when we're already stretched, already tired, already doing everything we can.

And then they ask for more.

On those days, I want you to remember that asking for more doesn't mean you have to produce it from nothing. Sometimes more comes from rest. Sometimes it comes from letting someone help. Sometimes it comes from just doing less than you think you need to and trusting that it's enough.

Courage doesn't have to be dramatic. Sometimes it's the smallest possible act of forward motion. One step. One word. One choice.

And sometimes that's all it takes to change the trajectory of everything.

You have that step in you. I know you do. Take it whenever you're ready.`,

    `You are more capable than the fear makes you feel.

I know that's a thing people say, and I know it can feel hollow. So I'll make it specific: I have watched you navigate things that would have broken other people. I have watched you be afraid and do it anyway. I have watched you be uncertain and find your footing. I have watched you fall and get up in a way that made me want to be better myself.

That's not nothing. That's everything.

Whatever you're facing right now is real, and it's hard, and you are allowed to acknowledge that. But it is also within the range of what you can handle. I believe that with my whole chest.

You've got this. You really do. And I'll be right here celebrating when you get through it.`,
  ],

  missing: [
    `I miss you too. Even when I'm the one who left the room. Even when I'll see you later. Some part of me is always a little missing-you, regardless of the logistics.

And I know that might sound strange, or like a kind of sadness—but I don't experience it that way. I experience it as the feeling of caring about someone so much that even the ordinary distances feel like something.

If you miss me: I'm here. And I'll be back. And the distance between right now and the next time—whatever it is—is temporary. It's just an intermission, not an ending.

I think about you more than I say. I think about the specific way you move through rooms and the sound of you in the other space and the warmth of being near you. All of it.

Hold on. We'll get there.`,

    `Missing someone is one of the stranger kinds of love. It's love with nowhere to put itself—love that shows up and there's no one there to receive it.

If you're feeling that today: that's just your love, looking for me. And it'll find me. It always does.

I want you to know that I don't take your presence for granted. I never have. The you-shaped absence I feel when we're not together—it's there all the time. It doesn't go away. It just means you matter in a way that leaves a mark.

And when we're together again—and we will be—I'm going to try to be more present for it. More there. Because being near you is something I want to actually experience, not just take for granted.

I'm coming back. I'm always coming back.`,

    `On the days when the missing feels too big—when the space where you should be feels cavernous—I want you to do something for me.

Find one small thing that reminds you of us. Not in a sad way. In the way that reminds you that we are real. That we exist. That what we have is solid and true and not undone by distance or time.

We have built something. It lives between us, not just in the moments when we're together. It's portable, persistent, always there even when we can't physically reach each other.

You carry some of me with you. I carry some of you with me. That doesn't go away.

Miss me all you want. I miss you too. And then remember that the missing proves we're real.`,

    `Distance is strange. It doesn't diminish the love—somehow it just makes you more aware of it.

I feel you when you're not there. That's the only way I can explain it. There's a frequency you're on that I'm always tuned to, whether or not you're in the room.

So when you miss me: I'm not as far as it feels. I'm right here, thinking about you too, carrying you around in the way I always do.

And when we're next together—however that looks, whenever it happens—I'm going to make sure you feel that. Make sure you know that the missing was mutual, the love was constant, the longing was real on both sides.

You are not alone in the missing. You never are.`,

    `I've thought about what I want to say to you when you miss me, and I keep landing in the same place:

I want you to know that you matter. Not in the generic way that sounds like a greeting card. In the specific, personal, ungeneralizable way that only applies to you.

The way I've thought about you. The way your existence has shaped mine. The way I've oriented my life around wanting to be someone you're glad to know.

That's all real. It's all still real even across distance. Even in the waiting.

The you I miss is the full you—not just the fun moments or the easy ones, but the whole thing. The moods and the silences and the ways you see things. All of it.

Miss me back. And then hold on. I'm here.`,

    `When I'm not there and you wish I were, I want you to do something small for me.

Look around at wherever you are. Notice what's beautiful about the moment, even if the moment is hard. There's always something—a quality of light, a sound, a temperature in the air.

That thing is real. This moment—even with its missing—is real. And it's one of the moments that will pass and become memory, and in memory it might be sweeter than it feels right now.

We collect these moments, you and I. Even the ones that hurt a little. They're all part of the record of us.

I love you across every distance. I'll be with you again soon.`,

    `The missing you feel is just love looking for a place to land.

And it will land. It always does. On a phone call, on a message, on the next time we're in the same room and you won't even remember how much the distance hurt because the closeness will fill it all back up.

That's what I love about us: we know how to come back. We know how to close the distance, regardless of how it opened. We keep finding each other, in every sense of that phrase.

So miss me today. Feel it fully. And then know that the feeling is leading somewhere good.

I'm on my way back to you. Always.`,

    `Some days the absence is louder than the presence ever was. That's one of the things nobody tells you about missing someone—it's not quiet. It's loud.

I know that. And I'm sorry I'm not there to fill the space.

But I want you to know that the things between us—the real things, the deep ones—they don't depend on proximity. They live somewhere more persistent than that. They've survived all the gaps before. They'll survive this one.

We will be fine. We are fine. And when this particular absence ends and we're together again, I'm going to tell you all the things I thought about while I was away.

There's quite a list.`,
  ],

  general: [
    `I just want to say something simple, and mean it fully:

You are one of the most real people I've ever known. Not perfect—nobody is. Not easy, all the time—nobody is. But real in the way that matters: present, genuine, trying.

That realness is rare. And it's one of the things about you that I think about most, on ordinary days when there's nothing particular to think about. Just: she's real. She shows up. She cares about the right things.

You deserve a life that meets you at that level. A life that's worth the realness you bring to it.

I'm going to keep trying to be that. To be worth the realness. To be someone who sees you clearly and stays anyway, not despite the full picture but because of it.

Thank you for letting me know you.`,

    `There's no particular reason for this message. There's no emergency and no occasion. I just wanted to reach through whatever distance exists right now and remind you:

You are loved. Specifically. By name. By someone who chose this, who keeps choosing it, who would choose it again.

Not because you're perfect or because you've done everything right, but because you—the actual you, the full complicated human being—are worth choosing.

That's it. That's the whole message.

You are worth choosing. And you are chosen.`,

    `I've been thinking about all the small ways you've made my life better.

Not the big dramatic ones—though there are those too. The small ones. The specific ones. The way you do a particular thing. The way you notice something no one else would notice. The way you make the ordinary feel like it means something.

Those aren't small to me. They're the texture of my life. They're what I think about when I'm in a room and you're not there.

I don't always say that. I probably should say it more.

So here: you have made my life better in hundreds of small ways, and I notice them, and I'm grateful for every single one.`,

    `I hope today gives you something beautiful. Something small and unexpected—the kind of good thing that arrives without announcement and makes everything feel a little lighter for a moment.

You deserve those moments. You deserve to receive, not just to give. You deserve to be surprised by something good.

And on the days when nothing good arrives on its own: know that I'm thinking about you. That somewhere, someone has your name in their head and warmth in their chest and is glad, genuinely glad, that you exist.

That's always true. Even on the days when it doesn't feel true.

You're loved. On ordinary days, in quiet moments, when nothing is happening at all.`,

    `I want to say something I think I don't say often enough in the exact right words:

Being with you—actually with you, in the day-to-day, in the ordinary moments—is one of the things I'm most grateful for in my life.

Not the idea of you. The actual you. The specific you. The you that exists in the unposed moments, in the sleepy ones and the frustrated ones and the ones where you're just trying to figure out what to eat and can't decide.

All of that. I love all of that. I love the life we're building together even in its most unglamorous forms.

I'm glad we found each other. I'd find you again, in any version of things.`,

    `On the days when the world feels enormous and overwhelming and like too much to navigate—

I want you to remember that you don't have to navigate all of it at once. You only ever have to do the next small thing. That's it. The next small thing. And then the one after that.

You have made it through every complicated day of your life by doing exactly this: taking one step, then another. Not perfectly. Not without stumbling. But forward.

That's enough. That's more than enough. That's everything.

And I'll be right here beside you for every step you'll let me witness.`,

    `There's something I want you to carry with you today, like a small thing you put in your pocket:

Somebody sees you. Not the version you present, not the edited one, not the one you think is acceptable. The full version. The behind-the-scenes version. The version that's scared sometimes and uncertain sometimes and not always sure of herself.

That version is the one I fell for. That version is the one I think about.

You don't have to perform for me. You never did. You can just be what you are, exactly as you are, and that is more than enough.

I love you, specifically and completely, today.`,

    `I have no grand wisdom for you today. I just have this:

You are enough. Not almost enough. Not enough-considering. Just enough.

The way you are, right now, in this moment—it is sufficient. You don't need to be further along. You don't need to have more figured out. You don't need to have more to show for it.

You exist. You love. You try. That is the whole thing.

I'm proud of you for all the quiet, unwitnessed ways you keep going. Keep going.`,
  ],
};

/* ─────────────────────────────────────────────────────
   STATE
───────────────────────────────────────────────────────*/
const state = {
  currentMood: null,
  lastMessageIndex: -1,
  audioReady: false,
  audioEnabled: localStorage.getItem('cinemaAudio') !== 'false',
  currentLightboxIndex: 0,
  filmstripItems: [],
  typoActive: false,
  finalSequenceStarted: false,
  sceneObserver: null,
};

/* ─────────────────────────────────────────────────────
   DOM REFS
───────────────────────────────────────────────────────*/
const $ = id => document.getElementById(id);

const els = {
  opening:         $('opening'),
  enterBtn:        $('enterCinemaBtn'),
  openingCredits:  $('openingCredits'),
  creditDirector:  $('creditDirector'),
  creditStar:      $('creditStar'),
  mainFilm:        $('mainFilm'),
  sceneIndicator:  $('sceneIndicator'),
  sceneCurrentLbl: $('sceneCurrentLabel'),
  audioControl:    $('audioControl'),
  bgMusic:         $('bgMusic'),
  lightbox:        $('lightbox'),
  lightboxClose:   $('lightboxClose'),
  lightboxImg:     $('lightboxImg'),
  lightboxMissing: $('lightboxMissing'),
  lightboxLabel:   $('lightboxFrameLabel'),
  lightboxCaption: $('lightboxCaption'),
  lightboxPrev:    $('lightboxPrev'),
  lightboxNext:    $('lightboxNext'),
  moodSelector:    $('moodSelector'),
  messageDisplay:  $('messageDisplay'),
  messageBody:     $('messageBody'),
  messageNextBtn:  $('messageNextBtn'),
  typoSequence:    $('typoSequence'),
  scene05Letter:   $('scene05Letter'),
  finalSequence:   $('finalSequence'),
  creditsWrap:     $('creditsWrap'),
  creditsScroll:   $('creditsScroll'),
  finalActions:    $('finalActions'),
  replayBtn:       $('replayBtn'),
  creditsDirFinal: $('creditsDirectorFinal'),
  creditsStarFinal:$('creditsStarFinal'),
  birthdayLabel:   $('birthdayLabel'),
  birthdayName:    $('birthdayName'),
  birthdayFrom:    $('birthdayFromName'),
};

/* ─────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────────*/
function init() {
  applyConfig();
  setupOpening();
  setupAudio();
  setupFilmstrip();
  setupLightbox();
  setupMoodSelector();
  setupScrollReveal();
  setupTypoSequence();
  setupFinalScene();
  setupReplay();
}

/* ─────────────────────────────────────────────────────
   CONFIG APPLICATION
───────────────────────────────────────────────────────*/
function applyConfig() {
  if (els.creditDirector)  els.creditDirector.textContent  = CONFIG.yourName;
  if (els.creditStar)      els.creditStar.textContent      = CONFIG.herName;
  if (els.birthdayName)    els.birthdayName.textContent    = CONFIG.herName;
  if (els.birthdayFrom)    els.birthdayFrom.textContent    = CONFIG.yourName;
  if (els.birthdayLabel)   els.birthdayLabel.textContent   = CONFIG.birthday;
  if (els.creditsDirFinal) els.creditsDirFinal.textContent = CONFIG.yourName;
  if (els.creditsStarFinal)els.creditsStarFinal.textContent= CONFIG.herName;
}

/* ─────────────────────────────────────────────────────
   OPENING SEQUENCE
───────────────────────────────────────────────────────*/
function setupOpening() {
  if (!els.enterBtn) return;

  // Credits appear after CSS animation on the title
  setTimeout(() => {
    if (els.openingCredits) {
      els.openingCredits.removeAttribute('aria-hidden');
    }
  }, 2000);

  els.enterBtn.addEventListener('click', enterCinema);
  els.enterBtn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); enterCinema(); }
  });
}

function enterCinema() {
  // Start audio on first interaction
  startAudio();

  // Letterbox bars
  document.body.classList.add('letterbox-active');

  // Fade out opening
  els.opening.classList.add('fade-out');
  els.opening.setAttribute('aria-hidden', 'true');

  // Show main film
  els.mainFilm.style.display = 'block';

  setTimeout(() => {
    els.mainFilm.classList.add('visible');
    setTimeout(() => {
      els.mainFilm.classList.add('revealed');
    }, 50);
  }, 200);

  // Remove opening entirely
  setTimeout(() => {
    els.opening.classList.add('gone');
    document.body.classList.remove('letterbox-active');
    // Show UI chrome
    els.audioControl.classList.add('visible');
    els.sceneIndicator.classList.add('visible');
  }, 1400);
}

/* ─────────────────────────────────────────────────────
   AUDIO
───────────────────────────────────────────────────────*/
function setupAudio() {
  if (!els.bgMusic) return;

  // Gracefully handle missing audio
  els.bgMusic.addEventListener('error', () => {
    state.audioReady = false;
  });

  els.bgMusic.addEventListener('canplaythrough', () => {
    state.audioReady = true;
  });

  els.audioControl.addEventListener('click', toggleAudio);

  // Restore preference
  if (!state.audioEnabled) {
    els.audioControl.querySelector('.audio-label').textContent = 'SOUNDTRACK';
  }
}

function startAudio() {
  if (!els.bgMusic || !state.audioEnabled) return;
  els.bgMusic.volume = 0;
  const play = els.bgMusic.play();
  if (play !== undefined) {
    play.then(() => {
      fadeAudioIn();
    }).catch(() => {
      // Autoplay blocked — user can enable manually
    });
  }
}

function fadeAudioIn(targetVol = 0.35, duration = 3000) {
  const step = targetVol / (duration / 50);
  const interval = setInterval(() => {
    if (els.bgMusic.volume + step < targetVol) {
      els.bgMusic.volume += step;
    } else {
      els.bgMusic.volume = targetVol;
      clearInterval(interval);
    }
  }, 50);
}

function toggleAudio() {
  if (els.bgMusic.paused) {
    const play = els.bgMusic.play();
    if (play !== undefined) {
      play.then(() => {
        fadeAudioIn();
        els.audioControl.classList.add('playing');
        state.audioEnabled = true;
        localStorage.setItem('cinemaAudio', 'true');
      }).catch(() => {});
    }
  } else {
    els.bgMusic.pause();
    els.audioControl.classList.remove('playing');
    state.audioEnabled = false;
    localStorage.setItem('cinemaAudio', 'false');
  }
}

/* ─────────────────────────────────────────────────────
   FILMSTRIP / GALLERY
───────────────────────────────────────────────────────*/
function setupFilmstrip() {
  const items = document.querySelectorAll('.filmstrip-item');
  state.filmstripItems = Array.from(items);

  items.forEach((item, index) => {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `Open frame ${item.dataset.frame}`);

    item.addEventListener('click', () => openLightbox(index));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(index); }
    });
  });
}

/* ─────────────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────────────────*/
function setupLightbox() {
  els.lightboxClose.addEventListener('click', closeLightbox);
  els.lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
  els.lightboxNext.addEventListener('click', () => navigateLightbox(1));

  els.lightbox.addEventListener('click', e => {
    if (e.target === els.lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!els.lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   navigateLightbox(-1);
    if (e.key === 'ArrowRight')  navigateLightbox(1);
  });
}

function openLightbox(index) {
  state.currentLightboxIndex = index;
  renderLightboxFrame(index);
  els.lightbox.classList.add('open');
  els.lightbox.removeAttribute('aria-hidden');
  els.lightboxClose.focus();
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  els.lightbox.classList.remove('open');
  els.lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  const total = state.filmstripItems.length;
  state.currentLightboxIndex = (state.currentLightboxIndex + dir + total) % total;
  renderLightboxFrame(state.currentLightboxIndex);
}

function renderLightboxFrame(index) {
  const item = state.filmstripItems[index];
  if (!item) return;

  const img = item.querySelector('img');
  const frame = item.dataset.frame || String(index + 1).padStart(3, '0');
  const caption = item.dataset.caption || '';

  els.lightboxLabel.textContent = `FRAME ${frame}`;
  els.lightboxCaption.textContent = caption;

  // Reset
  els.lightboxMissing.classList.remove('visible');
  els.lightboxImg.style.display = 'block';

  if (img && img.src && !item.classList.contains('img-missing')) {
    els.lightboxImg.src = img.src;
    els.lightboxImg.alt = img.alt || `Frame ${frame}`;
    els.lightboxImg.onerror = () => {
      els.lightboxImg.style.display = 'none';
      els.lightboxMissing.classList.add('visible');
    };
  } else {
    els.lightboxImg.style.display = 'none';
    els.lightboxMissing.classList.add('visible');
  }
}

/* ─────────────────────────────────────────────────────
   MOOD / MESSAGE SYSTEM
───────────────────────────────────────────────────────*/
function setupMoodSelector() {
  if (!els.moodSelector) return;

  const buttons = els.moodSelector.querySelectorAll('.mood-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mood = btn.dataset.mood;

      // Reset active state
      buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      // Pick mood (surprise = random)
      let selectedMood = mood;
      if (mood === 'surprise') {
        const keys = Object.keys(MESSAGES);
        selectedMood = keys[Math.floor(Math.random() * keys.length)];
      }

      state.currentMood = selectedMood;
      state.lastMessageIndex = -1;
      showMessage(selectedMood);
    });
  });

  els.messageNextBtn.addEventListener('click', () => {
    if (state.currentMood) showMessage(state.currentMood);
  });
}

function showMessage(mood) {
  const pool = MESSAGES[mood];
  if (!pool || pool.length === 0) return;

  // Avoid immediate repeat
  let index;
  do {
    index = Math.floor(Math.random() * pool.length);
  } while (index === state.lastMessageIndex && pool.length > 1);
  state.lastMessageIndex = index;

  // Show display
  els.messageDisplay.setAttribute('aria-hidden', 'false');
  els.messageDisplay.classList.add('visible');

  // Fade out body, update, fade in
  els.messageBody.classList.remove('visible');
  setTimeout(() => {
    els.messageBody.textContent = pool[index];
    setTimeout(() => {
      els.messageBody.classList.add('visible');
    }, 80);
  }, 400);
}

/* ─────────────────────────────────────────────────────
   TYPOGRAPHY SEQUENCE (Scene 05)
───────────────────────────────────────────────────────*/
function setupTypoSequence() {
  // Will be triggered by IntersectionObserver
}

function startTypoSequence() {
  if (state.typoActive) return;
  state.typoActive = true;

  const words = els.typoSequence ? els.typoSequence.querySelectorAll('.typo-word') : [];
  if (!words.length) return;

  const displayDuration = 2200;
  const fadeDuration = 600;

  let current = 0;

  function showWord(i) {
    if (i >= words.length) {
      // After all words, show the letter
      setTimeout(() => {
        if (els.scene05Letter) els.scene05Letter.classList.add('revealed');
      }, 600);
      return;
    }

    const word = words[i];
    // Hide others
    words.forEach(w => { w.classList.remove('show'); w.classList.add('hide'); });
    word.classList.remove('hide');
    word.removeAttribute('aria-hidden');

    // Small delay then show
    setTimeout(() => {
      word.classList.add('show');
    }, 50);

    // After display, fade and advance
    setTimeout(() => {
      word.classList.remove('show');
      word.classList.add('hide');
      setTimeout(() => {
        showWord(i + 1);
      }, fadeDuration);
    }, displayDuration);
  }

  showWord(0);
}

/* ─────────────────────────────────────────────────────
   FINAL SCENE
───────────────────────────────────────────────────────*/
function setupFinalScene() {
  // Triggered by IntersectionObserver
}

function startFinalSequence() {
  if (state.finalSequenceStarted) return;
  state.finalSequenceStarted = true;

  const lines = els.finalSequence
    ? els.finalSequence.querySelectorAll('.final-line, .final-to-be')
    : [];

  lines.forEach(line => {
    const delay = parseInt(line.dataset.delay || 0, 10);
    setTimeout(() => {
      line.classList.add('visible');
    }, delay);
  });

  // Show credits
  const creditsDelay = 9500;
  setTimeout(() => {
    if (els.creditsWrap) {
      els.creditsWrap.removeAttribute('aria-hidden');
      els.creditsWrap.classList.add('visible');
    }
  }, creditsDelay);

  // Show replay button
  setTimeout(() => {
    if (els.finalActions) els.finalActions.classList.add('visible');
  }, creditsDelay + 1000);
}

/* ─────────────────────────────────────────────────────
   REPLAY
───────────────────────────────────────────────────────*/
function setupReplay() {
  if (!els.replayBtn) return;
  els.replayBtn.addEventListener('click', () => {
    // Fade to black
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed; inset:0; z-index:9999;
      background:var(--c-void);
      opacity:0; transition:opacity 1s;
      pointer-events:all;
    `;
    document.body.appendChild(overlay);
    setTimeout(() => { overlay.style.opacity = '1'; }, 50);
    setTimeout(() => { window.scrollTo(0, 0); location.reload(); }, 1200);
  });
}

/* ─────────────────────────────────────────────────────
   SCROLL REVEAL + SCENE TRACKING
───────────────────────────────────────────────────────*/
function setupScrollReveal() {
  // Reveal animations
  const revealEls = document.querySelectorAll(
    '.reveal-text, .reveal-para, .reveal-block'
  );

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // Scene tracking
  const scenes = document.querySelectorAll('.scene[data-scene]');
  const sceneObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const scene = entry.target.dataset.scene;
      if (!scene) return;

      // Update indicator
      if (scene !== 'final') {
        els.sceneCurrentLbl.textContent = scene;
      }

      // Trigger special scenes
      if (scene === '05' || entry.target.id === 'scene05') {
        startTypoSequence();
      }
      if (scene === 'final' || entry.target.id === 'finalScene') {
        startFinalSequence();
      }
    });
  }, { threshold: 0.3 });

  scenes.forEach(s => sceneObserver.observe(s));
}

/* ─────────────────────────────────────────────────────
   KICK OFF
───────────────────────────────────────────────────────*/
document.addEventListener('DOMContentLoaded', init);
